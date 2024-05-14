import ObtenerCategoriaSchema from '../../schemas/categorias/obtener.schema.mjs';

/**
 * Clase para gestionar la obtención de las categorias.
 * 
 * @class
**/
class ObtenerCategoriaUtil {
	/**
	 * Validar los parametros de la petición se encuentren integros.
	 * 
	 * @param {JSON} parametros - Parametros de la petición.
	**/
	validarEntarda( parametros ) {
		try {
			const { error } = ObtenerCategoriaSchema.validate( parametros );

			// Propagar el error
			if( error ) throw new Error('Canal no valido');
		} catch ( error ) {
			// Propagar el error.
			throw error;
		}
	}
}

/**
 * Exporta la isntancia de `ObtenerCategoriaUtil`.
 * @class ObtenerCategoriaUtil
 */
export default new ObtenerCategoriaUtil();