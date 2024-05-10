import axios from 'axios';
import cacheService from '../services/cache.service.mjs';
import JsonService from './json.service.mjs';

/**
 * Servicio para obtener el token de autenticación de Ventiapp.
 * 
 * @class
 * TODO: quitar las impresiones en consola, guardar el token en config.json y en cache
**/
class LoginService {

	/**
	 * Nombre de usuario.
	 * @type {string}
	**/
	#usuario;

	/**
	 * Tipo de autorización.
	 * @type {string}
	**/
	#constrasenna;

	/**
	 * Contraseña del usuario.
	 * @type {string}
	**/
	#tipo;

	/**
	 * Crea una instancia de LoginService.
	 * 
	 * @constructor
	 * @param {string} usuario - Nombre de usuario.
	 * @param {string} constrasenna - Contraseña del usuario.
	 * @param {string} tipo - Tipo de autorización.
	**/
	constructor( usuario, constrasenna, tipo ) {
		this.#usuario = usuario;
		this.#constrasenna = constrasenna;
		this.#tipo = tipo;

		this.cache = cacheService;

		this.jsonService = new JsonService('config.json', './src/configs/');
	}

	/**
	 * Genera la fecha de expiración a partir de la fecha actual,
	 * la fecha actual mas seis días.
	 * 
	 * @function @private
	 * @returns {Date} Devuelve la fecha de expiración en formato 'yyyy-mm-dd'
	**/
	#fechaExpiracion() {
		const hoy = new Date();
		const seisDias = new Date();

		// Agregar seis días a la fecha actual.
		seisDias.setDate( hoy.getDate() + 6 );

		// Devolver la fecha en formato 'yyyy-mm-dd'
		return seisDias.toISOString().split('T')[0];
	}

	/**
	 * Metodo para iniciar sesión y obtener el token de acceso.
	 * 
	 * @async @method
	 * @returns {Promise<JSON>} Una promesa que se resuelve una vez que se haya iniciado sesión.
	**/
	async inicarSesion() {
		try {
			// Petición post para obtener el access token.
			axios.post( 'https://ventiapi.azurewebsites.net/login',
				{
					username: this.#usuario,
					password: this.#constrasenna,
					grant_type: this.#tipo
				},
				{
					headers: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				} 
			)
			.then( async respuesta => {
				const datos = {};
				// Guardar el access_token en cache.
				this.cache.set( 'access_token', respuesta.data.access_token );

				// Leer el json de la configuración.
				let datosJson = await this.jsonService.obtenerJson();

				// Si no existe
				if( !datosJson ) {
					datos.access_token = respuesta.data.access_token,
					datos.expires_in = this.#fechaExpiracion();
					this.jsonService.guardarJson(datos);
				} else {
					datosJson.access_token = respuesta.data.access_token,
					datosJson.expires_in = this.#fechaExpiracion();
					this.jsonService.guardarJson(datosJson);
				}
			})
			.catch( error => {
				throw new Error(`Error al obtener el access_token: ${error.message}`);
			});
		} catch ( error ) {
			throw new Error(`Error al iniciar sesión: ${error.message}`);
		}
	}
}

// Exportar la clase.
export default LoginService;