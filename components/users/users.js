'use strict'
import sequelize from '../../db.js'
import Sequelize from 'sequelize';


const model = (sequelize, DataTypes) => {
  let users = sequelize.define('users',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    eps: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    residencia: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    num_document: {
      type:DataTypes.INTEGER,
      allowNull:false,
 
    },
    password: {
      type:DataTypes.STRING,
      allowNull:true
    },  
    role_id: {
      type: DataTypes.INTEGER,
    },
    tipo_role :{
      type :DataTypes.STRING
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
    
  return users
}

export default model( sequelize, Sequelize.DataTypes )