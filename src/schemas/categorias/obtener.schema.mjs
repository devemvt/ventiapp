import Joi from 'joi';

/**
 * Esquema de validación para la obtención de categorías.
 * 
 * @typedef {Joi.ObjectSchema} ObtenerCategoriaSchema
 * @property {string} [canal] - Nombre del canal desde donde obtener las categorías.
**/

/**
 * Esquema de validación para la obtencíon de las categorías ya sea por canal o general.
 * 
 * @type {Joi.ObjectSchema}
**/
const ObtenerCategoriaSchema = Joi.object({
	/**
	 * Nombre del canal desde donde obtener las categorías.
	 *
	 * @type {string}
	 * @optional
	 * @valid 'amazon', 'amazonus', 'claroshop', 'elektra', 'linio', 'liverpool', 'magento',
	 * 'meli', 'mshops', 'shopify', 'tiendanube', 'venticommerce', 'walmartedi', 'walmartus',
	 * 'wish', 'woocommerce'
	**/
	canal: Joi.string()
	.valid(
		'amazon', 'amazonus', 'claroshop', 'elektra', 'linio', 'liverpool', 'magento', 'meli',
		'mshops', 'shopify', 'tiendanube', 'venticommerce', 'walmartedi', 'walmartus', 'wish',
		'woocommerce'
	)
	.optional()
	.messages({
		'any.only': 'El canal debe ser uno de los canales validos',
		'string.base': 'El canal debe ser una string',
		'string.empty': 'El canal no puede estar vacía'
	})
}).options(
	{ presence: 'required' }
);

/**
 * Exporta el esquema de validación para la obtención de categorías.
 *
 * @type {ObtenerCategoriaSchema}
 **/
export default ObtenerCategoriaSchema;