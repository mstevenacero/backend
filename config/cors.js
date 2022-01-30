import { config } from './index.js';

let origins;
if (config.modeEnv === 'production') {
  origins = ['http://localhost:3000'];
}
else{
  origins = ['http://localhost:8080','http://localhost:8100'];
}

const corsOptions = {
  origin: origins,
  credentials: true ,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

export default corsOptions;
