import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/stock'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `stockRouter`.
 * @module stockRouter
**/
export { router as stockRouter };