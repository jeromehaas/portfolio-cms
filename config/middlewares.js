// EXPORTS
module.exports = ({ env }) => [
	'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ['\'self\'', 'https:'],
					'img-src': ['\'self\'', 'data:', 'blob:', 'strapi.io', 'market-assets.strapi.io', `${ env('SPACE_URL')}`],
					'media-src': ['\'self\'', 'data:', 'blob:', 'strapi.io', 'market-assets.strapi.io', `${ env('SPACE_URL')}`],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	'strapi::cors',
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];