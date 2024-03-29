'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('symptoms_polls',{
      id_symptoms: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
      },
      clasification: {
        type:Sequelize.STRING
      },
      ubication: {
        type:Sequelize.STRING
      },
      data_symptoms_poll: {
        type:Sequelize.JSON,
        allowNull:false,
      },
      description_profesional: {
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
    return queryInterface.dropTable('symptoms_polls');
  }
};
