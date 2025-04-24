import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "./client-sequelize.js";

export class Author extends Model<
  InferAttributes<Author>,
  InferCreationAttributes<Author>
> {
  declare id!: CreationOptional<number>;
  declare name!: string;
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
    tableName: "author",
  }
);
