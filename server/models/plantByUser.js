module.exports = (sequelize, DataTypes) => {
  const PlantsByUser = sequelize.define('PlantsByUser', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scientificName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pictureURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastWatered: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  PlantsByUser.associate = (db) => {
    db.PlantsByUser.belongsTo(db.User, {
      foreignKey: { allowNull: false },
    });
  };
  return PlantsByUser;
};
