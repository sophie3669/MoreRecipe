import bcrypt from 'bcryptjs';

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
  }, { hooks: {
    beforeCreate: (regUser) => {
      regUser.password = bcrypt.hashSync(regUser.password, bcrypt.genSaltSync(8));
    },
    afterUpdate: (regUser) => {
      regUser.password = bcrypt.hashSync(regUser.password, bcrypt.genSaltSync(8));
    }
  }
  });
  return user;
};
