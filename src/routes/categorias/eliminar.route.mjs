import express from 'express';
import { eliminarCategoriaController } from '../../controllers/categorias/eliminar.controller.mjs';

/**
 * Controlador para manejar solicitudes HTTP.
 * 
 * @typedef {function} Controller
 * @param {Request} req - El objeto de solicitud HTTP.
 * @param {Response} res - El objeto de respuesta HTTP.
 * @param {function} next - Función para pasar el control al siguiente middleware.
**/

/**
 * Router para el manejor de las rutas de eliminar categoría.
 *
 * @type {express.Router}
 * @module eliminarRouter
**/
const router = express.Router();

/**
 * Petición GET para la eliminación de las categorías.
 * 
 * @name eliminarCategoria
 * @function @inner
 * @memberof eliminarRouter
 * @param {string} path - Ruta de la solicitud.
 * @param {Controller} controller - Controller a utilizar.
**/
router.get( '/', eliminarCategoriaController );

/**
 * Exporta el router como `eliminarRouter`.
 * @module eliminarRouter
*/
export { router as eliminarRouter };