import { Category } from "../models/Category.js";
import { validateCategory } from "../middlewares/categoryvalidateschema.js";

const categoryController = {
  // to add a category to the database
  async create(req, res) {
    try {
      res.status(created ? 201 : 200).json(category);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur, impossible de créer la categorie" });
    }
  },

  // to update a category to the database
  async updateCategory(req, res, next) {
    const id = parseInt(req.params.categoryId);
    const error = validateCategory(req);
    if (error) {
      return next(error);
    }

    const category = await Category.findByPk(id);
    if (!category) return next(); // 404 error

    for (const key in req.body) {
      if (category[key] !== undefined) {
        category[key] = req.body[key];
      }
    }

    await category.save();
    res.status(200).json(category);
  },

  async deleteCategory(req, res, next) {
    const id = parseInt(req.params.categoryId);

    const category = await Category.findByPk(id);
    if (!category) return next();

    await category.destroy();
    res.sendstatus(204);
  },
};

export default categoryController;
