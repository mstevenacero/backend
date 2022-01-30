import * as path from 'path';
import dotenv from 'dotenv';

const _envFilePath = (process.env.NODE_ENV == 'development' ? '.env.development' : '.env');
const join = path.join;
const __dirname = path.resolve();
const env_path = join(__dirname, `../${_envFilePath}`);

dotenv.config(
  {
    path: join(__dirname, `./${_envFilePath}`)
  }
);
//console.log(process.env)
const config = {
  port:process.env.PORT || 3000,
  dbHost:process.env.DB_HOST,
  dbName:process.env.DB_NAME,
  dbUser:process.env.DB_USER,
  dbPassword:process.env.DB_PWD,
  dbPort:process.env.DB_PORT,
  dbDialect:process.env.DB_DIALECT,  
  authJwtSecret:process.env.AUTH_JWT_SECRET,  
  expiresIn:process.env.TOKEN_EXPIRE,
  timeZone:process.env.TIME_ZONE,  
  apiUrlBase:process.env.API_URL_BASE,
  refreshTokenExpire:process.env.REFRESH_TOKEN_EXPIRE || "1h",
  publicPath:process.env.PUBLIC_PATH,  
  filesUrl:process.env.FILES_URL,
  fileSize:process.env.FILESIZE,
};


export { config };


