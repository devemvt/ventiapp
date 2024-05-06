import loggerConfig from "../configs/logger.config.mjs";
import ArchivosService from "./archivos.service.mjs";

/**
 * Clase para gestionar el registro de logs.
 * 
 * @class
**/
class LoggerUtil extends ArchivosService{
	/**
	 * Crea una instancia de LoggerUtil.
	 * 
	 * @constructor
	**/
	constructor() {
		// Llamar al constructor de la clase padre (ArchivoService).
		super( '', './logs/' );
	}

	/**
	 * Metodo privado para generar la fecha actual en un formato especí­fico.
	 * 
	 * @method @private
	 * @returns {string} Fecha en formato dd/mm/yyyy HH:mm:ss.
	**/
	#generarFecha() {
		/**
		 * Fecha actual.
		 * 
		 * @type {Date}
		**/
		const fecha = new Date();

		// Devolver la fecha formateada.
		return fecha.toLocaleString( 'es-MX', loggerConfig );
	}

	/**
	 * Metodo para escribe un registro en el archivo de log.
	 * 
	 * @param {string} tipo - El tipo de mensaje (error, info, etc.).
	 * @param {string} mensaje - El mensaje a registrar en el log.
	**/
	escribirLog( tipo, mensaje ) {
		try {
			/**
			 * Tipo de log permitidos.
			 * @type {string}
			**/
			const tiposPermitidos = ['error', 'info', 'debug', 'security', 'other', 'watcher'];

			// Validar que el tipo de log recibido sea correcto.
			if ( !tiposPermitidos.includes( tipo ) ) {
				throw new Error( `Tipo de log no válido: ${tipo}` );
			}
			else {
				// Guardar el nombre del archivo.
				this.rutaArchivo = `logs/${tipo}.log`;

				/**
				 * Entrada de log a registrar.
				 * @type {string}
				 */
				const registro = `[${this.#generarFecha()}] ${mensaje}\n`;

				// Guardar el registro en el archivo.
				this.escribirArchivo( registro, true );
			}
		} catch ( error ) {
			throw error;
		}
	}
}

// Exportar la instancia del logger
export default new LoggerUtil();