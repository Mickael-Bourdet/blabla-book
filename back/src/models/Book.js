import { Model, DataTypes } from "sequelize";
import sequelize from "./client-sequelize.js";

export class Book extends Model {}

Book.init(
  {
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false,
      unique: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    published: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    cover_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    page_count: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "book",
  }
);

// Test if it works
/* const books = await Book.findAll();
console.log(books); */
