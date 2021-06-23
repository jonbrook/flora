interface UserInterface {
  username: string;
  email: string;
  password: string;
}

interface PlantInterface {
  scientificName: string;
  commonName: string;
  sunlightAmount: string;
  waterAmount: number;
  waterFrequency: number;
  airPurifying: boolean;
  humidity: string;
  soilMoisture: string;
}

interface PlantsByUserInterface {
  pictureURL: string;
  lastWatered: string;
}
