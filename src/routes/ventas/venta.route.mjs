import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/venta'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `ventaRouter`.
 * @module ventaRouter
**/
export { router as ventaRouter };