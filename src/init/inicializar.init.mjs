import LoginService from '../services/login.service.mjs';
import dotenv from 'dotenv';
import loggerService from '../services/logger.service.mjs';

// Cargar la configuración del archivo de variables.
dotenv.config();

// Caso contrario obtener el access_token
class InicializarService {
	constructor() {
		this.#iniciarVariables();
	}

	/**
	 * Método privado para obtener el access_toke.
	 * 
	 * @async @function @private
	 * @returns {Promise<string>} Una promesa que resuelve el access_token.
	**/
	async #obtenerAccessToken() {
		try {
			const loginService = new LoginService(
				process.env.VENTIAPP_USERNAME,
				process.env.VENTIAPP_PASSWORD,
				process.env.VENTIAPP_GRANT_TYPE
			);
		
			await loginService.inicarSesion();

		} catch ( error ) {
			throw error;
		}
	}

	async #iniciarVariables() {
		try {
			this.#obtenerAccessToken();
		} catch (error) {
			// Registrar el evento.
			const mensaje = `┌ Mensaje: ${error.message}`;
			const Error = `\n└ Error: ${error}`
			loggerService.escribirLog('error', `${mensaje}${Error}`);
		}
	}
}

export default new InicializarService();