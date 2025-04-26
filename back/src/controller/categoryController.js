import { Category } from "../models/Category.js";

const categoryController = {
  // to add a category to the database
  async create(req, res, next) {},

  // to update a category to the database
  async updateCategory(req, res, next) {
    const id = parseInt(req.params.categoryId);

    const category = await Category.findByPk(id);
    if (!category) {
      const error = new Error("La mise à jour est impossible ");
      error.statusCode = 404;

      return next(error); // 404 error
    }
    //modify before save
    const { name } = req.body; // to extract the proprety of name from req.body

    //
    if (name) {
      category.name = name; //changes old name to the new name
    }

    await category.save();
    res.status(200).json(category);
  },

  //to delete a category
  async deleteCategory(req, res, next) {
    const id = parseInt(req.params.categoryId);

    const category = await Category.findByPk(id);

    if (!category) {
      const error = new Error("Impossible de supprimer");
      error.statusCode = 404;

      return next(error);
    }
    await category.destroy();
    res.status(204).send();
  },
};

export { categoryController };
