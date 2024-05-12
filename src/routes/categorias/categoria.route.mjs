import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/categoria'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `categoriaRouter`.
 * @module categoriaRouter
**/
export { router as categoriaRouter };