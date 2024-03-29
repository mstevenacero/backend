'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('symptoms',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      id_user_symptoms:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      flag: {
        type:Sequelize.STRING
      },
      data_symptoms: {
        type:Sequelize.JSON,
        allowNull:false,
    
      },
      descripcion: {
        type:Sequelize.STRING,
        allowNull:false,
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
    return queryInterface.dropTable('symptoms');
  }
};
