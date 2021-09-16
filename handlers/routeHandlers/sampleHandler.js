/*
*Title: sample Handler
*Description: sample Routs;
*Author: Shafi
*Date:15/9/2021
*/

// module scaffolding 
const handler = {};

handler.sampleHandle = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(200, {message:'this is a sample url'});
};

module.exports = handler;