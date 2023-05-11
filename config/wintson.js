const appRoot = require('app-root-path');
const wintson = require('winston');
 

var options = {
    combined: {
        level: 'info',
        filename: `${appRoot}/logs/combined.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: true,
    },
    error:{
        level:'error',
        filename: `${appRoot}/logs/combined.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, //5MB
        maxFiles: 5,
        colorize: true,
    },
    debug: {
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: true
    },
};

const logger = wintson.createLogger({
    'format':wintson.format.combine(
        wintson.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        wintson.format.prettyPrint()
    ),
    'transports': [
        new wintson.transports.File(options.combined),
        new wintson.transports.File(options.error),
        new wintson.transports.Console(options.debug)

    ]
});

module.exports = logger;