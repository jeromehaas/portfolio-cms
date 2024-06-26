// IMPORTS
const {html, text, subject} = require('../../template/index.js');

// EXPORTS
module.exports = {
	
	// AFTER-CREATE HOOK
	async afterCreate(event) {
		
		// GET RESULT
		const {result} = event;
		
		// EMAIL TEMPLATE
		const emailTemplate = {
			subject: subject,
			text: text,
			html: html,
		};
		
		// EMAIL CONFIGS
		const emailConfigs = {
			to: 'hello@jeromehaas.ch',
			from: 'no-reply@jeromehaas.ch',
		};
		
		// EMAIL VARIABLES
		const emailVariables = {
			firstname: result.firstname,
			lastname: result.lastname,
			email: result.email,
			phone: result.phone,
			message: result.message,
		};
		
		// SEND EMAIL
		await strapi.plugins.email.services.email.sendTemplatedEmail(emailConfigs, emailTemplate, emailVariables);
		
	},
	
};