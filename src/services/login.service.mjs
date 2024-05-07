import axios from 'axios';

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
	}

	/**
	 * Metodo para iniciar sesión y obtener el token de acceso.
	 * 
	 * @async @method
	 * @returns {Promise<JSON>} Una promesa que se resuelve una vez que se haya iniciado sesión.
	**/
	async inicarSesion() {
		try {
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
			.then( response => {
				console.log( response.data );
			})
			.catch( error => {
				console.log( error );
			});
		} catch ( error ) {
			throw new Error(`Error al iniciar sesión: ${error.message}`);
		}
	}
}

// Exportar la clase.
export default LoginService;