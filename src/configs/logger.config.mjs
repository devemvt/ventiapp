/**
 * Configuración para el logger.
 * 
 * @module logger.config
**/

/**
 * Configuración de las opciones para formatear la fecha.
 * 
 * @typedef {Object} loggerConfig
 * @property {string} timeZone - Zona horaria para la fecha.
 * @property {string} year - Formato del año ('numeric' o '2-digit').
 * @property {string} month - Formato del mes ('numeric' o '2-digit').
 * @property {string} day - Formato del dí­a ('numeric' o '2-digit').
 * @property {string} hour - Formato de la hora ('numeric' o '2-digit').
 * @property {string} minute - Formato de los minutos ('numeric' o '2-digit').
 * @property {string} second - Formato de los segundos ('numeric' o '2-digit').
 * @property {boolean} hour12 - Indica el formato de 12 horas (true) o 24 horas (false).
**/


/**
 * Configuración para el logger.
 * 
 * @type {loggerConfig}
**/
const loggerConfig = {
	timeZone: 'America/Mexico_City',
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: false
};

// Exportar la configuración del logger.
export default loggerConfig;