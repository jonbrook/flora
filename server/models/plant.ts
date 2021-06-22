export default (sequelize, DataTypes) => {
  const Plant = sequelize.define('Plant', {
    scientificName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commonName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sunlightAmount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    waterAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    waterFrequency: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    airPurifying: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soilMoisture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Plant.associate = (db) => {
    db.Plant.hasMany(db.PlantsByUser);
  };

  return Plant;
};
