import { actualizarRouter } from './actualizar.route.mjs';
import { buscarRouter } from './buscar.route.mjs';
import { crearRouter } from './crear.route.mjs';
import { eliminarRouter } from './eliminar.route.mjs';
import { mapearRouter } from './mapear.route.mjs';
import { obtenerRouter } from './obtener.route.mjs';
import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/categoria'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Agregar el router de actualizar categoría en la ruta '/actualizar'.
 * 
 * @name actualizarRouter
 * @memberof categoria
 * @param {string} path - Ruta de la solicitud.
 * @param {router} route - Router a utilizar.
**/
router.use( '/actualizar', actualizarRouter );

/**
 * Agregar el router de buscar categoría en la ruta '/buscar'.
 * 
 * @name buscarRouter
 * @memberof categoria
 * @param {string} path - Ruta de la solicitud.
 * @param {router} route - Router a utilizar.
**/
router.use( '/buscar', buscarRouter );

/**
 * Agregar el router de crear categorías en la ruta '/crear'.
 * 
 * @name crearRouter
 * @memberof categoria
 * @param {string} path - Ruta de la solicitud.
 * @param {router} route - Router a utilizar.
**/
router.use( '/crear', crearRouter );

/**
 * Agregar el router de eliminar categoría en la ruta '/eliminar'.
 * 
 * @name eliminarRouter
 * @memberof categoria
 * @param {string} path - Ruta de la solicitud.
 * @param {router} route - Router a utilizar.
**/
router.use( '/eliminar', eliminarRouter );

/**
 * Agregar el router de mapear categoría en la ruta '/mapear'.
 * 
 * @name mapearRouter
 * @memberof categoria
 * @param {string} path - Ruta de la solicitud.
 * @param {router} route - Router a utilizar.
**/
router.use( '/mapear', mapearRouter );

/**
 * Agregar el router de obtener categorías en la ruta '/obtener'.
 * 
 * @name obtenerRouter
 * @memberof categoria
 * @param {string} path - Ruta de la solicitud.
 * @param {router} route - Router a utilizar.
**/
router.use( '/obtener', obtenerRouter );

/**
 * Exporta el router como `categoriaRouter`.
 * @module categoriaRouter
**/
export { router as categoriaRouter };