export default (sequelize, DataTypes) => {
  const PlantsByUser = sequelize.define('PlantsByUser', {
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
  PlantsByUser.associate = (db) => {
    db.PlantsByUser.belongsTo(db.Plant, {
      foreignKey: { allowNull: false },
    });
  };
  return PlantsByUser;
};
