'use strict'

import sequelize from '../../db.js'
import Sequelize from 'sequelize';

const model = (sequelize, DataTypes) => {
  let role = sequelize.define('role',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    tipo_role: {
      type:DataTypes.STRING,
      allowNull:false
    },
    description: {
        type:DataTypes.STRING,
    },
    status: {
      type:DataTypes.INTEGER,
    },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
  
  role.associate = (models) => {    
    role.hasMany(models.users,{                    
      foreignKey: 'role_id'
    })
  }

  return role
}

export default model(sequelize, Sequelize.DataTypes)