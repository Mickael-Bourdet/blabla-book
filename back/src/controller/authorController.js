import { Author } from "../models/Author.js";

const authorController = {
  /**
   * @function updateAuthor
   * @description Update the name of an existing author.
   * @param {Object} req - Express request object (expects `authorId` as param and `name` in body).
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async updateAuthor(req, res, next) {
    const id = parseInt(req.params.authorId);

    const author = await Author.findByPk(id);

    // check if author exist, if it doesn't, go to tne error middleware
    if (!author) {
      const error = new Error("This author doesn't exist");
      error.statusCode = 404;
      return next(error);
    }

    // get the value to change, here : name
    const { name } = req.body;

    author.name = name;

    await author.save();

    res.status(200).json(author);
  },

  /**
   * @function deleteAuthor
   * @description Delete an author by ID from the database.
   * @param {Object} req - Express request object, must contain `authorId` as route param.
   * @param {Object} res - Express response object, returns success message.
   * @param {Function} next - Express next middleware function, used to handle errors.
   */
  async deleteAuthor(req, res, next) {
    const id = parseInt(req.params.authorId);
    const author = await Author.findByPk(id);

    if (!author) {
      const error = new Error("This author doesn't exist");
      error.statusCode = 404;
      return next(error);
    }

    await author.destroy();

    // Discuss : 200 ou 204 ?
    res.status(200).json({ message: "Author successfully deleted." });
  },

  /**
   * @function addAuthor
   * @description Create a new author with the provided name.
   * @param {Object} req - Express request object (expects `name` in `req.body`).
   * @param {Object} res - Express response object.
   */
  async addAuthor(req, res) {
    const { name } = req.body;
    const newAuthor = await Author.create({ name });

    res.status(201).json(newAuthor);
  },
};

export { authorController };
