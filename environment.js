/*
*Title: Environment
*Description: This is a variable for environment;
*Author: Shafi
*Date:19/9/2021
*/

// dependesis

// module scaffolding 

const environment = {};


environment.staging = {
    port: 3000,
    envName: 'Staging'
};

environment.production = {
    port: 5000,
    envName: 'production'
};

// detarmine whice environment was passed 

const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';


// export corresponding environment object

const environmentToExport = typeof(environment[currentEnvironment]) === 'object' ? environment[currentEnvironment] : environment.staging;

// export module
module.exports = environmentToExport;
