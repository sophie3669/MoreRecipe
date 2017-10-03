

module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return review;
};
