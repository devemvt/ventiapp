import app from '../configs/server.config.mjs';
import loggerService from '../services/logger.service.mjs';
import dotenv from 'dotenv';
import LoginService from '../services/login.service.mjs';

dotenv.config();

// TODO: Quitar de aqui y colocarlo en un archivo init.
const loginService = new LoginService(
	process.env.VENTIAPP_USERNAME,
	process.env.VENTIAPP_PASSWORD,
	process.env.VENTIAPP_GRANT_TYPE
);

loginService.inicarSesion();

// TODO: Implementar un modo producción y un modo desarrollo.

/**
 * Iniciar el servidor en modo de desarrollo.
 * 
 * @callback
**/
app.listen( process.env.SV_PORT , () => {
	loggerService.escribirLog(
		'watcher',
		`Aplicacion corriendo en el puerto: ${process.env.SV_PORT}\nModo: Dev`
	);
} );