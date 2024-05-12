import express from 'express';
import { crearCategoriaController } from '../../controllers/categorias/crear.controller.mjs';

/**
 * Controlador para manejar solicitudes HTTP.
 * 
 * @typedef {function} Controller
 * @param {Request} req - El objeto de solicitud HTTP.
 * @param {Response} res - El objeto de respuesta HTTP.
 * @param {function} next - Función para pasar el control al siguiente middleware.
**/

/**
 * Router para el manejor de las rutas de crear categorías.
 *
 * @type {express.Router}
 * @module crearRouter
**/
const router = express.Router();

/**
 * Petición GET para la creación de las categorías.
 * 
 * @name crearCategoria
 * @function @inner
 * @memberof crearRouter
 * @param {string} path - Ruta de la solicitud.
 * @param {Controller} controller - Controller a utilizar.
**/
router.get( '/', crearCategoriaController );

/**
 * Exporta el router como `crearRouter`.
 * @module crearRouter
*/
export { router as crearRouter };