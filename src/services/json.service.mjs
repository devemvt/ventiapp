import ArchivoService from './archivos.service.mjs';

/**
 * Servicio para manejar la creación y manipulación de archivos JSON.
 * 
 * @class
**/
class JsonService extends ArchivoService {
	/**
	 * Crea una instancia de JsonService.
	 * @param {string} nombreArchivo Nombre del archivo.
	 * @param {string} [rutaArchivo='/'] - La ruta donde se creará el archivo (por defecto es la raíz).
	**/
	constructor( nombreArchivo, rutaArchivo = '/' ) {
		// Llamar al constructor de la clase padre (ArchivoService).
		super( nombreArchivo, rutaArchivo );
	}

	/**
	 * Obtener los datos del archivo devolverlos como un JSON.
	 * 
	 * @async
	 * @returns {Promise<JSON|null>} Una promesa que se resuelve con el objeto JSON leído del archivo,
	 * o null si el archivo no existe o no se puede leer.
	**/
	async obtenerJson() {
		try {
			const datosRaw = await this.leerArchivo();

			// Validar que se haya devuelto datos.
			if ( datosRaw ) {
				// Regresar datos en forma de JSON.
				return JSON.parse( datosRaw );
			} else {
				// El archivo no existe o está vacío.
				return {}; 
			}
		} catch ( error ) {
			throw new Error(`Error al obtener JSON del archivo '${this.nombreArchivo}': ${error.message}`);
		}
	}

	/**
	 * Guardar el JSON en el archivo.
	 * 
	 * @async
	 * @param {object} json - JSON que se va a guardar como JSON.
	 * @returns {Promise<void>} Una promesa que se resuelve una vez que los datos
	 * se han guardado en el archivo.
	**/
	async guardarJson( json ) {
		try {
			/**
			 * Json convertido en string.
			 * @type {string}
			**/
			const datos = JSON.stringify( json );

			// Guardar los datos en el archivo.
			await this.escribirArchivo( datos, false );
		} catch (error) {
			throw new Error(`Error al guardar JSON en el archivo '${this.nombreArchivo}': ${error.message}`);
		}
	}
}

// Exportar la clase.
export default JsonService;