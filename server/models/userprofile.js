'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserProfile = sequelize.define('UserProfile', {
    UserName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserProfile;
};