
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
  declare name: string;
  
}

  Category.init(
    {
     
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