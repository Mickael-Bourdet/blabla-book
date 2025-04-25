import { UPDATE } from "sequelize/lib/query-types";
import { Category } from "../models/Category.js";

const categoryController = {
  // to add a category to the database
  async addCategory(req, res) {
    const id = parseInt(req.params.categoryId);
    try {
      // "findOrCreate" looks for a category with the given id.
      // is it exists, it return it, or it creates it
      const [category, created] = await Category.findOrCreate({
        where: { id },
      });
      res.status(created ? 201 : 200).json(category);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur, impossible de créer la categorie" });
    }
  },

  async UpdateCategory(req, res) {
    const id = parseInt(req.params.categoryId);
  },

  async deleteCategory(req, res) {
    const id = parseInt(req.params.categoryId);
  },
};

export default categoryController;
