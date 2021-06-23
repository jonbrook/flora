import { Model, Association } from 'sequelize';
import PlantsByUser from './PlantsByUser';

export default class User extends Model implements UserInterface {
  public username!: string;

  public email!: string;

  public password!: string;

  public readonly plantsByUser?: PlantsByUser[];

  public static associations: {
    plantsByUser: Association<User, PlantsByUser>;
  };
}
