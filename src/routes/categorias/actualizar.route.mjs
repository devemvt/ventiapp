import express from 'express';
import { actualizarCategoriaController } from '../../controllers/categorias/actualizar.controller.mjs';

/**
 * Controlador para manejar solicitudes HTTP.
 * 
 * @typedef {function} Controller
 * @param {Request} req - El objeto de solicitud HTTP.
 * @param {Response} res - El objeto de respuesta HTTP.
 * @param {function} next - Función para pasar el control al siguiente middleware.
**/

/**
 * Router para el manejor de las rutas de actualización de categorías.
 *
 * @type {express.Router}
 * @module actualizarRouter
**/
const router = express.Router();

/**
 * Petición GET para la actualización de las categorías.
 * 
 * @name actualizarCategoria
 * @function @inner
 * @memberof actualizarRouter
 * @param {string} path - Ruta de la solicitud.
 * @param {Controller} controller - Controller a utilizar.
**/
router.get( '/', actualizarCategoriaController );

/**
 * Exporta el router como `actualizarRouter`.
 * @module actualizarRouter
*/
export { router as actualizarRouter };