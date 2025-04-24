import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "./client-sequelize.js";

export class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare id: CreationOptional<number>
  declare name: string;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "category",
  }
);