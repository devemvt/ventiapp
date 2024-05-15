import ObtenerCategoriaSchema from '../../schemas/categorias/obtener.schema.mjs';
import axios from 'axios';

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

	/**
	 * Obtener la información de la categoria
	 * 
	 * @param {string} access_token - Token de acceso.
	 * @param {string} [canal] - Canal a buscar.
	**/
	async obtenerCategoria( access_token, canal ) {
		try {
			const parametro = canal ? `?channel=${canal}` : '';
			const respuesta = await axios.get(
				`https://ventiapi.azurewebsites.net/api/Category/GetCategories${parametro}`,
				{
					headers: {
						'content-type': 'application/x-www-form-urlencoded',
						'Authorization': `Bearer ${access_token}`
					}
				} 
			);

			return respuesta.data;
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