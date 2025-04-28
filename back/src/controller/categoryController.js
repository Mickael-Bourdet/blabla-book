import { Category } from "../models/Category.js";

const categoryController = {
  /**
   * @function createCategory
   * @description Create a new category and save it to the database.
   * @param {object} req -- Express request object (expects `name` in body).
   * @param {object} res -Express response object.
   * @param {function} next - Express next middleware function.
   */

  // to add a category to the database
  async createCategory(req, res, next) {
    // get a data send
    const { name } = req.body;

    // verify that that the field 'name' is present
    if (!name) {
      const error = new Error("Le champ 'name' est obligatoire");
      error.statusCode = 400;
      return next(error);
    }

    const newCategory = await Category.create({ name });

    res.status(201).json(newCategory);
  },

  /**
   * @function updateCategory
   * @description Update the name of existing name
   * @param {object} req -Express request object (expects `categoryId` as param).
   * @param {object} res -Express response object.
   * @param {function} next - Express next middleware function.
   */

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

  /**
   * @function deleteCategory
   * @description Delete a name by id from the database
   * @param {object} req -Express request object
   * @param {object} res -Express response object, returns success message.
   * @param {function} next - Express next middleware function, used to handle errors.
   */

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
