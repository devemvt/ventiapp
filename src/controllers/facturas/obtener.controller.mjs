/**
 * Controlador para obtener un las solicitudes de facturas.
 * 
 * @param {import('express').Request} req Objeto de solicitud.
 * @param {import('express').Request} res Objeto de respuesta.
 * @returns {Promise<void>} Promesa que se termina cuando se finaliza el proceso.
 * @throws {Error} Si ocurre un error durante la obtención.
**/
const obtenerFacturaController = async (req, res) => {
	try {
		res.status(200).send('Facturas obtenidas.');
	} catch ( error ) {
		res.status(500).send('Error al obtener las facturas.');
	}
}

/**
 * Exporta el controlador `obtenerFacturaController`.
 * @module obtenerFacturaController
 */
export { obtenerFacturaController };