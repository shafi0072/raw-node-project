/*
*Title: Rout Handler
*Description: Application Routs;
*Author: Shafi
*Date:15/9/2021
*/
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;