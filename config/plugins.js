module.exports = ({env}) => ({
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				s3Options: {
					credentials: {
						accessKeyId: env('SPACE_ACCESS_KEY_ID'),
						secretAccessKey: env('SPACE_ACCESS_SECRET'),
					},
					endpoint: env('SPACE_ENDPOINT'),
					region: 'eu-central-1',
					params: {
						Bucket: env('SPACE_BUCKET'),
					},
				},
			},
		},
	},
	email: {
		config: {
			provider: 'nodemailer',
			providerOptions: {
				host: env('SMTP_HOST'),
				port: env('SMTP_PORT'),
				auth: {
					user: env('SMTP_USERNAME'),
					pass: env('SMTP_PASSWORD'),
				},
			},
			settings: {
				defaultFrom: env('SMTP_USERNAME'),
				defaultReplyTo: env('SMTP_USERNAME'),
			},
		},
	},
});
