<<<<<<< HEAD
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './client-sequelize';
=======
import { DataTypes, Model } from "sequelize";
import { sequelize } from "./client-sequelize.js";
>>>>>>> dev

interface IAuthor {
  id: number;
  name: string;
}

<<<<<<< HEAD
// impléments c'est pour que Typescript vérifie que la class contient bien les gens de l'interface 
// extends model : c'est pour sequelize sache quels champs ce modèle gère 
=======
// implements c'est pour que Typescript vérifie que la class contient bien les gens de l'interface
// extends model : c'est pour sequelize sache quels champs ce modèle gère
>>>>>>> dev
export class Author extends Model<IAuthor> implements IAuthor {
  public id!: number;
  public name!: string;
}

<<<<<<< HEAD
//j'ai repris le dictionnaire des données 
=======
//j'ai repris le dictionnaire des données
>>>>>>> dev
Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
<<<<<<< HEAD

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
=======
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "authors",
    modelName: "author",
  }
);
>>>>>>> dev
