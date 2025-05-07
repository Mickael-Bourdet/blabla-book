import { Model, DataTypes } from "sequelize";
import sequelize from "./client-sequelize.js";

export class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    sequelize,
    tableName: "user",
  }
);
