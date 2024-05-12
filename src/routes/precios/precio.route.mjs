import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/precio'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `precioRouter`.
 * @module precioRouter
**/
export { router as precioRouter };