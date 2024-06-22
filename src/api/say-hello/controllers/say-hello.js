'use strict';

/**
 * say-hello controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::say-hello.say-hello');
