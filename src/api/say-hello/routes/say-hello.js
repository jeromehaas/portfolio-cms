'use strict';

/**
 * say-hello router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::say-hello.say-hello');
