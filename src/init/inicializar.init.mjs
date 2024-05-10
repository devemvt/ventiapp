import LoginService from '../services/login.service.mjs';
import dotenv from 'dotenv';
import cacheService from '../services/cache.service.mjs';

// Cargar la configuración del archivo de variables.
dotenv.config();

// todo implementar la cache, si ya esta el token en el archivo tomarlo, validar que no este expirado
// Caso contrario obtener el access_token
class InicializarService {
	constructor() {
		this.cache = cacheService;
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
		this.#obtenerAccessToken();
	}
}

export default new InicializarService();