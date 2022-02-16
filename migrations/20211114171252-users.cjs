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
      phone: {
        type: Sequelize.INTEGER,
      },
      movil: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      gener: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.INTEGER,
      },
      level_school: {
        type: Sequelize.STRING,
      },
      life_alone: {
        type: Sequelize.STRING,
      },
      grup_etni: {
        type: Sequelize.STRING,
      },
      vunerable_person: {
        type: Sequelize.STRING,
      },
      family_conection: {
        type: Sequelize.STRING,
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