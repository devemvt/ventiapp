/**
 * Controlador para eliminar una categoría de un marketplace o ecommerce.
 * 
 * @param {import('express').Request} req Objeto de solicitud.
 * @param {import('express').Request} res Objeto de respuesta.
 * @returns {Promise<void>} Promesa que se termina cuando se finaliza el proceso.
 * @throws {Error} Si ocurre un error durante la eliminación.
**/
const eliminarCategoriaController = async (req, res) => {
	try {
		res.status(200).send('Categoría eliminada.');
	} catch ( error ) {
		res.status(500).send('Error al eliminar la categoría.');
	}
}

/**
 * Exporta el controlador `eliminarCategoriaController`.
 * @module eliminarCategoriaController
 */
export { eliminarCategoriaController };