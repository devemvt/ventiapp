import express, { Router } from 'express';
import { categoriaRouter } from './categorias/categoria.route.mjs';
import { facturaRouter } from './facturas/factura.route.mjs';
import { mensajeRouter } from './mensajes/mensaje.route.mjs';
import { precioRouter } from './precios/precio.route.mjs';
import { productoRouter } from './productos/producto.route.mjs';
import { publicacionRouter } from './publicaciones/publicacion.route.mjs';
import { stockRouter } from './stock/stock.route.mjs';
import { ventaRouter } from './ventas/venta.route.mjs';
import { webhookRouter } from './webhooks/webhook.route.mjs';

/**
 * Router principal para el manejor de todas las rutas.
 * 
 * @type {express.Router} 
**/
const router = express.Router();

/**
 * Agregar el router de categorías en la ruta '/categoria'.
 * 
 * @name categoriaRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/categoria', categoriaRouter );

/**
 * Agregar el router de facturas en la ruta '/factura'.
 * 
 * @name facturaRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/factura', facturaRouter );

/**
 * Agregar el router de mensajes en la ruta '/mensaje'.
 * 
 * @name mensajeRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/mensaje', mensajeRouter );

/**
 * Agregar el router de precios en la ruta '/precio'.
 * 
 * @name precioRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/precio', precioRouter );

/**
 * Agregar el router de productos en la ruta '/producto'.
 * 
 * @name productoRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/producto', productoRouter );

/**
 * Agregar el router de publicaciones en la ruta '/publicacion'.
 * 
 * @name publicacionRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/publicacion', publicacionRouter );

/**
 * Agregar el router de stock en la ruta '/stock'.
 * 
 * @name stockRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/stock', stockRouter );

/**
 * Agregar el router de ventas en la ruta '/venta'.
 * 
 * @name ventaRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/venta', ventaRouter );

/**
 * Agregar el router de webhooks en la ruta '/webhook'.
 * 
 * @name webhookRouter
 * @memberof router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
router.use( '/webhook', webhookRouter );

/**
 * Exportar el router principal configurado con las rutas.
 * 
 * @module router 
**/
export default router;