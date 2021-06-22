interface User {
  id: number;
  username: string;
  PlantsByUser: PlantsByUser[];
}

interface PlantsByUser {
  id: number;
  pictureURL: string;
  lastWatered: Date;
  Plant: Plant;
}

interface Plant {
  scientificName: string;
  commonName: string;
  sunlightAmount: string;
  waterAmount: number;
  waterFrequency: number;
  airPurifying: boolean;
  humidity: string;
  soilMoisture: string;
}

interface HistoryWithPlant extends History {
  plant: PlantsByUser;
}
