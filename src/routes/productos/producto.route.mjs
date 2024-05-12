import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/producto'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `productoRouter`.
 * @module productoRouter
**/
export { router as productoRouter };