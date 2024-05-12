import express from 'express';

/**
 * Router secundario para el manejor de todas las rutas de '/factura'.
 *
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Exporta el router como `facturaRouter`.
 * @module facturaRouter
**/
export { router as facturaRouter };