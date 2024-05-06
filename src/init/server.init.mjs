import app from "../configs/server.config.mjs";
import loggerService from "../services/logger.service.mjs";

/**
 * Iniciar el servidor en modo de desarrollo.
 * 
 * @callback
 * TODO: Implementar el archivo .env para obtner de ahi el puerto, asi como definir los modos.
**/
app.listen( 4000 , () => {
	loggerService.escribirLog(
		'watcher',
		`Aplicacion corriendo en el puerto: 4000\nModo: Dev`
	);
} );