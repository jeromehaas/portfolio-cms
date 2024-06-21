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
});
