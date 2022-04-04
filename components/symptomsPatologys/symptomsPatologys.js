'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';

const model = (sequelize, DataTypes) => {
  let symptomsPatologys = sequelize.define('symptomsPatologys',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    id_symptoms_poll: {
      type: DataTypes.INTEGER,
    },
    code_patology: {
      type: DataTypes.INTEGER,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return symptomsPatologys
}

export default model( sequelize, Sequelize.DataTypes )