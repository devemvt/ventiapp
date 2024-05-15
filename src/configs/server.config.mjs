import express from 'express';
import router from '../routes/router.route.mjs';
import loggerService from '../services/logger.service.mjs';
import cacheService from '../services/cache.service.mjs';
import InicializarService from '../init/inicializar.init.mjs';

const datosCache = await InicializarService.iniciarVariables();

cacheService.set( 'access_token', datosCache.access_token );

/**
 * Instancia de la aplicación Express.
 * @type {import('express').Express}
**/
const app = express();

// Middleware para manejar solicitudes OPTIONS.
app.options('*', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen.
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH'); // Permitir solo esos métodos.
	res.setHeader('Access-Control-Allow-Headers', '*'); // Permitir cualquier encabezado.
	res.status(200).end();
});


/**
 * Middleware para analizar el cuerpo de las peticiones como JSON.
 * Establecer un limite de 20mb para las peticiones.
**/
app.use( express.json( { limit: '20mb' } ) );

// Agregar la cache a la request.
app.use( (req, res, next) => {
	req.cache = cacheService; // Agregar la instancia de cache a la solicitud (req)
	next();
});

/**
 * Agregar el router principal.
 * 
 * @name router
 * @param {string} path - Ruta de la solicitud.
 * @param {Router} route - Router a utilizar.
**/
app.use( '/', router );

/**
 * Ruta default: Responde con un mensaje indicando que la aplicación está corriendo.
 * Esta ruta maneja todas las solicitudes entrantes.
 * 
 * @param {import('express').Request} req - El objeto de solicitud.
 * @param {import('express').Response} res - El objeto de respuesta.
**/
app.all( '*', ( req, res ) => {
	// Enviar una respuesta de ruta desconocida
	res.status(404).json( { error: 'La ruta no existe', ruta: req.url } );

	// Registrar el evento.
	const mensaje = '┌ Mensaje: Acceso a una ruta no definida';
	const ruta = `\n├ Ruta${req.path}`;
	const metodo = `\n└ Metodo: ${req.method}`
	loggerService.escribirLog('other', `${mensaje}${ruta}${metodo}`);
});

// Exportar la instancia de express.
export default app;