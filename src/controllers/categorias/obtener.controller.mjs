import obtenerUtil from '../../utils/categorias/obtener.util.mjs';
/**
 * Controlador para obtener una categoría de un marketplace o ecommerce.
 * 
 * @param {import('express').Request} req Objeto de solicitud.
 * @param {import('express').Request} res Objeto de respuesta.
 * @returns {Promise<void>} Promesa que se termina cuando se finaliza el proceso.
 * @throws {Error} Si ocurre un error durante la obtención.
**/
const obtenerCategoriaController = async (req, res) => {
	try {
		obtenerUtil.validarEntarda( req.params );
		res.status(200).send('Categoría obtenida.');
	} catch ( error ) {
		res.status(500).json({
			mensaje: 'Error al obtener la categoría.', detalle: error.message
		});
	}
}

/**
 * Exporta el controlador `obtenerCategoriaController`.
 * @module obtenerCategoriaController
 */
export { obtenerCategoriaController };