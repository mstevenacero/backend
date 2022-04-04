'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';

const model = (sequelize, DataTypes) => {
  let patologys = sequelize.define('patologys',{
    code: {
      type: DataTypes.INTEGER,
      primaryKey:true
    },
    name_patology: {
      type: DataTypes.STRING,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return patologys
}

export default model( sequelize, Sequelize.DataTypes )