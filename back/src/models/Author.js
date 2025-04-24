import { DataTypes, Model } from "sequelize";
import sequelize from "./client-sequelize.js";

export class Author extends Model {}

//j'ai repris le dictionnaire des données
Author.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "author",
  }
);
