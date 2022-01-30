'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('roles',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      tipo_role: {
        type:Sequelize.STRING,
        allowNull:false
      },
      description: {
          type:Sequelize.STRING,
      },
      status: {
        type:Sequelize.INTEGER,
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
    return queryInterface.dropTable('roles');
  }
};
