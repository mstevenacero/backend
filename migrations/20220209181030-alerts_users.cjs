'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('alerts_users',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      id_user_alert: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      description_alerts: {
        type: Sequelize.STRING,
        allowNull:false
      },
      symptoms_user: {
        type:Sequelize.JSON,
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
    return queryInterface.dropTable('alerts_users');
  }
};