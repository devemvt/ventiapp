import fs from 'fs';
import path from 'path';

/**
 * Servicio para crear, eliminar y manipular archivos.
 * 
 * @class
**/

class ArchivosService {
	/**
	 * Crea una instancia de ArchivosService.
	 * 
	 * @constructor
	 * @param {string} nombreArchivo - Nombre del archivo.
	 * @param {string} [rutaArchivo='/'] - La ruta donde se creará el archivo (por defecto es la raíz).
	**/
	constructor( nombreArchivo, rutaArchivo = '/' ) {
		/**
		 * Nombre del archivo.
		 * @type {string}
		 */
		this.nombreArchivo = nombreArchivo;

		/**
		 * Ruta completa del archivo.
		 * @type {string}
		 */
		this.rutaArchivo = path.join( rutaArchivo, this.nombreArchivo );

		// Si no existe el archivo se crea.
		if ( !fs.existsSync( this.rutaArchivo ) ) {
			this.#crearArchivo();
		}
	}

	/**
	 * Metodo privado para verifica si el archivo existe.
	 * 
	 * @async @method @private
	 * @returns {Promise<boolean>} Una promesa que se resuelve con true si el archivo existe,
	 * o false si no existe.
	**/
	async #existeArchivo() {
		try {
			// Verificar si el archivo existe
			await fs.promises.access( this.rutaArchivo );
			return true; // El archivo existe
		} catch ( error ) {
			return false; // El archivo no existe
		}
	}

	/**
	 * Metodo privado para validar la existencia del archivo, si no existe crearlo.
	 * 
	 * @async @method @private
	 * @returns {Promise<void>} Promesa que se resuelve cuando se completa la creación del archivo.
	**/
	async #crearArchivo() {
		try {
			// Verificar si el archivo existe
			if ( !fs.existsSync( this.rutaArchivo ) ) {
				// Crea un archivo vacio.
				fs.writeFile( this.rutaArchivo, '', 'utf-8', ( error ) => {
					if ( error ) {
						throw error;
					}
				});
			}
		} catch ( error ) {
			throw new Error( `Error al crear el archivo ${this.nombreArchivo}`, error );
		}
	}

	/**
	 * Metodo para escribir en un archivo.
	 * 
	 * @async @method
	 * @param {string} datos - Los datos a escribir en el archivo.
	 * @param {boolean} [agregar=false] - Indica si se debe agregar los datod al archivo (true),
	 * o escribir desde cero (false por defecto).
	 * @returns {Promise<void>} Una promesa que se resuelve una vez que se haya escrito en el archivo.
	**/
	async escribirArchivo( datos, agregar = false ) {
		try {
			// Verificar si el archivo existe
			if ( !fs.existsSync( this.rutaArchivo ) ) {
				// Crea un archivo y agregar los datos.
				fs.writeFile( this.rutaArchivo, datos, 'utf-8', ( error ) => {
					if ( error ) {
						throw error;
					}
				});
				return;
			}

			// Se agregan los datos al archivo.
			if( agregar ) {
				fs.appendFile( this.rutaArchivo, datos, 'utf-8', ( error ) => {
					if ( error ) {
						throw error;
					}
				});
			}
			else { // Se escriben los datos al archivo, se pierde el contenido anterior.
				fs.writeFile( this.rutaArchivo, datos, 'utf-8', ( error ) => {
					if ( error ) {
						throw error;
					}
				});
			}
		} catch ( error ) {
			throw new Error(`Error al escribir en el archivo '${this.nombreArchivo}': ${error.message}`);
		}
	}

	/**
	 * Metodo para leer un archivo.
	 * 
	 * @async @method
	 * @returns {Promise<string|null>} Una promesa que se resuelve con el contenido del archivo
	 * como una cadena de texto, o null si el archivo no existe.
	**/
	leerArchivo() {
		try {
			if ( !fs.existsSync( this.rutaArchivo ) ) {
				return null;
			}
			else {
				const datos = fs.readFileSync( this.rutaArchivo, 'utf8' );
				return datos;
			}
		} catch ( error ) {
			throw new Error( `Error al leer el archivo '${this.nombreArchivo}': ${error.message}` );
		}
	}

	/**
	 * Metodo privado para eliminar un archivo.
	 * 
	 * @async @method @private
	 * 
	 * @returns {Promise<string|null>} Una promesa que se resuelve una vez que el archivo
	 * haya sido eliminado.	
	**/
	async #eliminarArchivo() {
		try {
			// Verificar si el archivo existe
			const existe = await this.#existeArchivo();

			// Terminar ya que no existe el archivo.
			if ( !existe ) { return; }

			await fs.promises.unlink( this.nombreArchivo );

		} catch ( error ) {
			throw new Error( `Error al eliminar el archivo '${this.nombreArchivo}': ${error.message}` );
		}
	}
}

// Exportar la clase.
export default ArchivosService;