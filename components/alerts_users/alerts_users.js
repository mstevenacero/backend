'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';


const model = (sequelize, DataTypes) => {
  let alerts_users = sequelize.define('alerts_users',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    id_user_alert: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    description_alerts: {
      type: DataTypes.STRING,
      allowNull:false
    },
    symptoms_user: {
      type:DataTypes.JSON,
      allowNull:false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return  alerts_users
}

export default model( sequelize, Sequelize.DataTypes )