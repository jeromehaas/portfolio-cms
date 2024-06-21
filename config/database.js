const path = require('path');

module.exports = ({env}) => {
	const client = env('DATABASE_CLIENT', 'postgres');
	
	return {
		connection: {
			client,
			connection: {
				host: env('DATABASE_HOST', 'localhost'),
				port: env.int('DATABASE_PORT', 5432),
				database: env('DATABASE_NAME', 'strapi'),
				user: env('DATABASE_USERNAME', 'strapi'),
				password: env('DATABASE_PASSWORD', 'strapi'),
				schema: env('DATABASE_SCHEMA', 'public'),
				ssl: {
					rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
				},
			},
			pool: {min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10)},
			acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
		},
	};
};
