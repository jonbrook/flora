import { Model, Association } from 'sequelize';
import User from './User';
import Plant from './Plant';

export default class PlantsByUser
  extends Model
  implements PlantsByUserInterface {
  public pictureURL!: string;

  public lastWatered!: string;

  public readonly plant?: Plant[];

  public readonly user?: User[];

  public static associations: {
    plant: Association<PlantsByUser, Plant>;
    user: Association<PlantsByUser, User>;
  };
}
