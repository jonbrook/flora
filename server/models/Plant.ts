/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import PlantsByUser from './PlantsByUser';

export default class Plant extends Model implements PlantInterface {
  public scientificName!: string;

  public commonName!: string;

  public sunlightAmount!: string;

  public waterAmount!: number;

  public waterFrequency!: number;

  public airPurifying!: boolean;

  public humidity!: string;

  public soilMoisture!: string;

  public readonly plantsByUser?: PlantsByUser[];

  public static associations: {
    plantsByUser: Association<Plant, PlantsByUser>;
  };
}
