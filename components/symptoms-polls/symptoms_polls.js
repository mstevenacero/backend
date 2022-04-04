'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';


const model = (sequelize, DataTypes) => {
  let symptoms_polls = sequelize.define('symptoms_polls',{
    id_symptoms: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true
    },
    clasification: {
      type:DataTypes.STRING,
    },
    ubication: {
      type:DataTypes.STRING,
    },
    data_symptoms_poll: {
      type:DataTypes.JSON,
      allowNull:false,
    },
    description_profesional: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return symptoms_polls
}

export default model( sequelize, Sequelize.DataTypes )