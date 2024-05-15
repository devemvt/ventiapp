import LoginService from '../services/login.service.mjs';
import dotenv from 'dotenv';
import loggerService from '../services/logger.service.mjs';

// Cargar la configuración del archivo de variables.
dotenv.config();

// Caso contrario obtener el access_token
class InicializarService {
	
	constructor() {}

	/**
	 * Método privado para obtener el access_toke.
	 * 
	 * @async @function @private
	 * @returns {Promise<string>} Una promesa que resuelve el access_token.
	**/
	async #obtenerAccessToken() {
		try {
			// Instanciar la clase con los datos.
			const loginService = new LoginService(
				process.env.VENTIAPP_USERNAME,
				process.env.VENTIAPP_PASSWORD,
				process.env.VENTIAPP_GRANT_TYPE
			);
		
			// Obtener el token de acceso.
			const access_token = await loginService.inicarSesion();

			// Devolver el token.
			return access_token;

		} catch ( error ) {
			// Propagar el error.
			throw error;
		}
	}

	/**
	 * Método publico para inicializar todos los datos.
	 * 
	 * @async @function @public
	 * @returns {Promise<JSON>} Una promesa que resuelve el inicializar las variables.
	**/
	async iniciarVariables() {
		try {
			const datos = {};
			// Obtener el token de acceso.
			datos.access_token = await this.#obtenerAccessToken();

			// Devolver los datos inicializados.
			return datos;
		} catch ( error ) {
			// Registrar el evento.
			const mensaje = `┌ Mensaje: ${error.message}`;
			const Error = `\n└ Error: ${error}`
			loggerService.escribirLog('error', `${mensaje}${Error}`);
		}
	}
}

export default new InicializarService();