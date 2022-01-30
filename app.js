import express from 'express';
const app = express();
import * as path from 'path';

import { logErrors, errorHandler } from './middlewares/errorHandler.js';
import response from './middlewares/response.js'

const __dirname = path.resolve();
app.use('/public', express.static(`${__dirname}/public`));

// Routes middlewares
import routes from './network/index.js';
app.use(response)
app.use('/api',  routes );

app.use(logErrors);
app.use(errorHandler);

export default app;