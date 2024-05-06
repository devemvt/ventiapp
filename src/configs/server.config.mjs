import express from 'express';
import loggerService from '../services/logger.service.mjs';

/**
 * Instancia de la aplicación Express.
 * @type {import('express').Express}
**/
const app = express();

/**
 * Middleware para analizar el cuerpo de las peticiones como JSON.
 * Establecer un limite de 20mb para las peticiones.
**/
app.use( express.json( { limit: '20mb' } ) );

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