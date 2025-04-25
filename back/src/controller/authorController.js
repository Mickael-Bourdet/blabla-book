import { Author } from "../models/Author.js";

const authorController = {
  /**
  * @function updateAuthor
  * @description Update the name of an existing author.
  * @param {Object} req - Express request object (expects `authorId` as param and `name` in body).
  * @param {Object} res - Express response object.
  * @param {Function} next - Express next middleware function.
  */
  async updateAuthor (req, res, next) {

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

    // check if the value is good
    if (typeof name === "string" && name.trim() !== "") {
      
      author.name = name.trim();
      
      await author.save();
      
      res.status(200).json(author);
    } else {
      const error = new Error("Invalid or missing 'name' field");
        error.statusCode = 400;
        return next(error);
    }

  },
};

export { authorController };