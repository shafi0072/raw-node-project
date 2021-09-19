/*
*Title: Handle Request Response
*Description: Handle Request Response;
*Author: Shafi
*Date:15/9/2021
*/

// dependesis
const {StringDecoder} = require('string_decoder')
const url = require('url');
const routes = require('../routes');
const {notFoundHandle} = require('../handlers/routeHandlers/notFoundHandler')

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
// request handleing
    // url getting and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query; 
    const headersObject = req.headers;

    const requresProperties = {
        parsedUrl,
        path,
        trimedPath,
        method,
        queryStringObject,
        headersObject
    }


    // stream Decoder
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHander = routes[trimedPath] ? routes[trimedPath] : notFoundHandle;


   


    req.on('data', (buffer) => {
        realData +=  decoder.write(buffer);
        
    });

    // after done the event of data

    req.on('end', () => {
        realData += decoder.end();
        chosenHander(requresProperties, (statusCode, payload) => {
            statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
            payload = typeof(payload) === 'object' ? payload : {};
    
            const payloadString = JSON.stringify(payload);
    
            // return the final res
    
            res.writeHead(statusCode);
            res.end(payloadString);
        });

        // response handle
        res.end('Hello Programmers');
    })

    
    
}

module.exports = handler