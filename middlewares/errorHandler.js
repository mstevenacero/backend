'use strict'

import { config } from '../config/index.js';
import chalk from 'chalk';
const red = chalk.red;

function withErrorStack(error, stack){
    
    if (config.modeEnv == 'development') {                
        return { error, stack }
    }

    return error
}

function logErrors(err, req, res, next){    
    console.log(red(err.stack))
    next(err)
}

function errorHandler(err, req, res, next) {
    res.status(err.status || 500)
    res.json(withErrorStack(err.message, err.stack))
}

export {
    logErrors,
    errorHandler
}
