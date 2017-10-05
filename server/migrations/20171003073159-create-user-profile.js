

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserProfiles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    UserName: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    },
    EmailAddress: {
      type: Sequelize.STRING
    },
    Photo: {
      type: Sequelize.TEXT
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UserProfiles')
};
