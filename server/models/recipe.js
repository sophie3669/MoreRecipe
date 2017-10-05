module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    recipeId: DataTypes.INTEGER,
    recipename: DataTypes.INTEGER,
    ingredients: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    upvote: DataTypes.INTEGER,
    downvote: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return recipe;
};
