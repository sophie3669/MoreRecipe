

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    photo: DataTypes.BLOB
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
