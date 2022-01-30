'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';


const model = (sequelize, DataTypes) => {
  let symptoms = sequelize.define('symptoms',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    flag: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    data_symptoms: {
      type:DataTypes.JSON,
      allowNull:false,
      unique:true,
    },
    descripcion: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return symptoms
}

export default model( sequelize, Sequelize.DataTypes )