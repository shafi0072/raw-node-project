/*
*Title: Rout Handler
*Description: Application Routs;
*Author: Shafi
*Date:15/9/2021
*/
// dependesis
const {sampleHandle} = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    'sample': sampleHandle,
    
};

module.exports = routes