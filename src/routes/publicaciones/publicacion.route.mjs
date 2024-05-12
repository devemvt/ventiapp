import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/publicacion'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `publicacionRouter`.
 * @module publicacionRouter
**/
export { router as publicacionRouter };