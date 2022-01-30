'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      eps: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      residencia: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      num_document: {
        type:Sequelize.INTEGER,
        allowNull:false,
   
      },
      password: {
        type:Sequelize.STRING,
        allowNull:true
      },  
      role_id: {
        type: Sequelize.INTEGER,
      },
      tipo_role :{
        type :Sequelize.STRING
      },
      // Timestamps
      
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
        },
        updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};