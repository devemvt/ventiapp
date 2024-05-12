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
		res.status(200).send('Categoría obtenida.');
	} catch ( error ) {
		res.status(500).send('Error al obtener la categoría.');
	}
}

/**
 * Exporta el controlador `obtenerCategoriaController`.
 * @module obtenerCategoriaController
 */
export { obtenerCategoriaController };