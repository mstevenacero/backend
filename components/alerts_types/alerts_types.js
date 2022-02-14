'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';

const model = (sequelize, DataTypes) => {
  let alerts_types = sequelize.define('alerts_types',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    type_alert: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description_alerta: {
      type: DataTypes.STRING,
      allowNull:false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return alerts_types
}

export default model( sequelize, Sequelize.DataTypes )