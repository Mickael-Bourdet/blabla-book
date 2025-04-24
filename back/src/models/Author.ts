import { DataTypes, Model } from 'sequelize';
import { sequelize } from './client-sequelize';

interface IAuthor {
  id: number;
  name: string;
}

// impléments c'est pour que Typescript vérifie que la class contient bien les gens de l'interface 
// extends model : c'est pour sequelize sache quels champs ce modèle gère 
export class Author extends Model<IAuthor> implements IAuthor {
  public id!: number;
  public name!: string;
}

//j'ai repris le dictionnaire des données 
Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize,
    tableName: 'authors',
    modelName: 'author',
  }
); 