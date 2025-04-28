import { Book } from "../models/associations.js";
import { Category } from "../models/Category.js";

const adminController = {
  /**
   *  Add a new book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {Object} Book
   */

  async AddNewBook(req, res, next) {
    // Get the params
    const { isbn, title, description, published, cover_url, page_count } = req.body;

    //   check if the book is not already in the DB
    const isRegistered = await Book.findOne({ where: { isbn } });
    if (isRegistered) {
      return next({
        statusCode: 409,
        message: "Impossible d'ajouter ce livre car il existe déjà",
      });
    }

    const newBook = await Book.create({
      isbn,
      title,
      description,
      published,
      cover_url,
      page_count,
    });

    res.status(201).json(newBook);
  },

  /**
   *  update a book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {Object} Book
   */

  async updateBook(req, res, next) {
    // First check if the url ID exist, if not error 404
    const bookId = parseInt(req.params.bookId);

    const book = await Book.findByPk(bookId);

    if (!book) {
      return next({ statusCode: 404, message: "Ce livre n'existe pas" });
    }

    // Get the params
    const fields = ["isbn", "title", "description", "published", "cover_url", "page_count"];

    // if a value is declare, change it otherwise don't
    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        book[field] = req.body[field];
      }
    });

    // Save changes in the DB
    await book.save();

    // return updated book
    res.status(200).json(book);
  },

  /**
   *  delete a book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {void}- status 204
   */

  async deleteBook(req, res, next) {
    // First check if the url ID exist, if not error 404
    const bookId = parseInt(req.params.bookId);

    const book = await Book.findByPk(bookId);

    if (!book) {
      return next({ statusCode: 404, message: "Ce livre n'existe pas" });
    }

    // otherwise the book exist so we can delete it
    await book.destroy();
    res.sendStatus(204);
  },

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
   * @param {object} res -Express response object
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
    res.sendStatus(204);
  },
};

export default adminController;
