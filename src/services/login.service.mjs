import axios from 'axios';
import JsonService from './json.service.mjs';
import loggerService from './logger.service.mjs';

/**
 * Servicio para obtener el token de autenticación de Ventiapp.
 * 
 * @class
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

		this.jsonService = new JsonService('config.json', './src/configs/');
	}

	/**
	 * Método privado para genera la fecha de expiración a partir de la fecha actual,
	 * la fecha actual mas seis días. ( Leer la wiki para saber por se tomo a seis días )
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
	 * Método privado para saber si el token actual ya expiro de forma local.
	 * 
	 * @function @private
	 * @returns {boolean|null} Devuelve true si la fecha de hoy es mayor a la de expiración,
	 * false en caso contrario, null en caso de que el json de configuración no exista.
	**/
	async #tokenExirado() {
		try {
			// Leer el json de la configuración.
			const datosJson = await this.jsonService.obtenerJson();

			// Si no existe el json de confiración.
			if( !datosJson ) return null;

			// Si alguno de los datos del token no existen en el json se toma como expirado.
			if( !datosJson.expires_in || !datosJson.access_token ) return true;

			/**
			 * Obtener fecha del json y colocar las horas en 00:00,
			 * para evitar probelmas de conversión.
			 * 
			 * @type {Date}
			**/
			const fechaExpiracion = new Date(`${datosJson.expires_in}T00:00`);

			/**
			 * Obtener fecha de hoy y colocar las horas en 00:00,
			 * para evitar probelmas de conversión.
			 * 
			 * @type {Date}
			**/
			const hoy = new Date();
			hoy.setHours(0,0,0,0);

			// Devolver true si la fecha de hoy es mayor a la de expiración, false en caso contrario.
			return hoy > fechaExpiracion;
		} catch ( error ) {
			// Propagar el error.
			throw error;
		}
	}

	/**
	 * Metodo para iniciar sesión y obtener el token de acceso.
	 * 
	 * @async @method
	 * @returns {Promise<JSON>} Una promesa que se resuelve una vez que se haya iniciado sesión.
	**/
	async inicarSesion() {
		try {
			// Saber si el token ya expiro.
			const tokenExpirado = await this.#tokenExirado();

			if( tokenExpirado ) {
				const expiraEn = this.#fechaExpiracion();
				// Petición post para obtener el access token.
				const respuesta = await axios.post(
					'https://ventiapi.azurewebsites.net/login',
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
				);

				// TODO Buscar otra forma de hacer este bloque de código.
				// Si el json de configuración no existe.
				if( tokenExpirado == null ) {
					const datos = {};
					datos.access_token = respuesta.data.access_token,
					datos.expires_in = expiraEn;
					this.jsonService.guardarJson(datos);
				}
				else {
					// Leer el json de la configuración.
					const datos = await this.jsonService.obtenerJson();
					datos.access_token = respuesta.data.access_token,
					datos.expires_in = expiraEn;
					this.jsonService.guardarJson(datos);
				}
				// Registrar el evento.
				const mensaje = '┌ Mensaje: Token generado';
				const expira = `\n└ Expira: ${expiraEn}`
				loggerService.escribirLog('info', `${mensaje}${expira}`);
			}
		} catch ( error ) {
			// Error generado por la petición.
			if ( error.response ) {
				if ( error.response.status === 429 ) {
					// TODO hacer algo para cuando se exceda el limite.
					// Si se excede el limite de peticiones por segundo (1).
					throw new Error(
						'No se pudo obtener el token, se esta excediendo el limite de peticiones.'
					);
				}
				else { // Cualquier otro tipo de error en la petición
					throw new Error(`Error al obtener el access_token: ${error.message}`);
				}
			}
			else { // Error generado por cualquier otro motivo.
				throw new Error(`Error al iniciar sesión: ${error.message}`);
			}
		}
	}
}

// Exportar la clase.
export default LoginService;