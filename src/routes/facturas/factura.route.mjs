import express from 'express';
import { obtenerRouter } from './obtener.route.mjs';

/**
 * Router secundario para el manejor de todas las rutas de '/factura'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Agregar el router de obtener facturas en la ruta '/obtener'.
 * 
 * @name obtenerRouter
 * @memberof factura
 * @param {string} path - Ruta de la solicitud.
 * @param {router} route - Router a utilizar.
**/
router.use( '/obtener', obtenerRouter );

/**
 * Exporta el router como `facturaRouter`.
 * @module facturaRouter
**/
export { router as facturaRouter };