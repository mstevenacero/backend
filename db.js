import Sequelize from 'sequelize';
import { config } from './config/index.js';

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host:config.dbHost,
  dialect: config.dbDialect,
  dialectOptions:{
    allowPublicKeyRetrieval:true,
    useSSL: false
  },
  ///logging: (process.env.NODE_ENV === 'development' ? true : false),
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;