'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';

const model = (sequelize, DataTypes) => {
  let lineTimes = sequelize.define('lineTimes',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false
    },
    doctor: {
      type: DataTypes.STRING,
    
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    date_user:{
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.STRING,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return lineTimes
}

export default model( sequelize, Sequelize.DataTypes )