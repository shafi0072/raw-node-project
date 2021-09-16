/*
*Title: NotFound Handler
*Description: 404 Routs;
*Author: Shafi
*Date:15/9/2021
*/

const handler = {};

handler.notFoundHandle = (requestProperties, callback) => {
    
    callback(404, {message:'404 not found'});
};

module.exports = handler;