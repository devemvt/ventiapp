import express from 'express';
import { obtenerCategoriaController } from '../../controllers/categorias/obtener.controller.mjs';

/**
 * Controlador para manejar solicitudes HTTP.
 * 
 * @typedef {function} Controller
 * @param {Request} req - El objeto de solicitud HTTP.
 * @param {Response} res - El objeto de respuesta HTTP.
 * @param {function} next - Función para pasar el control al siguiente middleware.
**/

/**
 * Router para el manejor de las rutas de obtener categorías.
 *
 * @type {express.Router}
 * @module obtenerRouter
**/
const router = express.Router();

/**
 * Petición GET para la obtención de las categorías.
 * 
 * @name obtenerCategoria
 * @function @inner
 * @memberof obtenerRouter
 * @param {string} path - Ruta de la solicitud.
 * @param {Controller} controller - Controller a utilizar.
**/
router.get( '/', obtenerCategoriaController );

/**
 * Exporta el router como `obtenerRouter`.
 * @module obtenerRouter
*/
export { router as obtenerRouter };