import app from '../configs/server.config.mjs';
import loggerService from '../services/logger.service.mjs';
import dotenv from 'dotenv';

// Cargar la configuración del archivo de variables.
dotenv.config();

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