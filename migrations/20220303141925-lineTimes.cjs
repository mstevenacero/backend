'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('lineTimes',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      status: {
        type: Sequelize.STRING,
        allowNull:false
      },
      doctor: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      date_user:{
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('lineTimes');
  }
};