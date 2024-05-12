import express from 'express';
import { buscarCategoriaController } from '../../controllers/categorias/buscar.controller.mjs';

/**
 * Controlador para manejar solicitudes HTTP.
 * 
 * @typedef {function} Controller
 * @param {Request} req - El objeto de solicitud HTTP.
 * @param {Response} res - El objeto de respuesta HTTP.
 * @param {function} next - Función para pasar el control al siguiente middleware.
**/

/**
 * Router para el manejor de las rutas de busqueda de categorías.
 *
 * @type {express.Router}
 * @module buscarRouter
**/
const router = express.Router();

/**
 * Petición GET para la busqueda de las categorías.
 * 
 * @name buscarCategoria
 * @function @inner
 * @memberof buscarRouter
 * @param {string} path - Ruta de la solicitud.
 * @param {Controller} controller - Controller a utilizar.
**/
router.get( '/', buscarCategoriaController );

/**
 * Exporta el router como `buscarRouter`.
 * @module buscarRouter
*/
export { router as buscarRouter };