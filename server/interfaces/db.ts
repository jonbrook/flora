export interface UserInterface {
  username: string;
  email: string;
  password: string;
}
export interface PlantInterface {
  scientificName: string;
  commonName: string;
  sunlightAmount: string;
  waterAmount: number;
  waterFrequency: number;
  airPurifying: boolean;
  humidity: string;
  soilMoisture: string;
}
export interface PlantsByUserInterface {
  pictureURL: string;
  lastWatered: string;
}
