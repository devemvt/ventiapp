import express from 'express';
import { mapearCategoriaController } from '../../controllers/categorias/mapear.controller.mjs';

/**
 * Controlador para manejar solicitudes HTTP.
 * 
 * @typedef {function} Controller
 * @param {Request} req - El objeto de solicitud HTTP.
 * @param {Response} res - El objeto de respuesta HTTP.
 * @param {function} next - Función para pasar el control al siguiente middleware.
**/

/**
 * Router para el manejor de las rutas de mapear categorias.
 *
 * @type {express.Router}
 * @module mapearRouter
**/
const router = express.Router();

/**
 * Petición GET para el mapeo de las categorías.
 * 
 * @name mapearCategoria
 * @function @inner
 * @memberof mapearRouter
 * @param {string} path - Ruta de la solicitud.
 * @param {Controller} controller - Controller a utilizar.
**/
router.get( '/', mapearCategoriaController );

/**
 * Exporta el router como `mapearRouter`.
 * @module mapearRouter
*/
export { router as mapearRouter };