import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/webhook'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `webhookRouter`.
 * @module webhookRouter
**/
export { router as webhookRouter };