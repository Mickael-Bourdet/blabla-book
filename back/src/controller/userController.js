import { User, Book, Author } from "../models/associations.js";

const userController = {
  // Get one user with associated tables (already read books, wish-to-read books)
  /**
   * GET /user/:userId
   * @summary Fetch a user's information along with their associated books (already read and wish-to-read).
   * @param {number} userId.path.required - The ID of the user.
   * @return {object} 200 - Success response with user data and associated books.
   * @throws {Error} 409 - Utilisateur non trouvé.
   */
  async getOneUser(req, res, next) {
    const id = parseInt(req.params.userId);

    // Fetch the user with associated books
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "email"],
      include: ["books_already_read", "books_wish_read"],
    });
    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    }

    res.status(200).json(user);
  },

  // Update a user's information (name, email, password)
  /**
   * PATCH /user/:userId
   * @summary Update a user's information such as name, email, and password.
   * @param {number} userId.path.required - The ID of the user to update.
   * @param {object} body.body.required - The fields to update (email, name, password).
   * @return {object} 200 - Success response with updated user data.
   * @throws {Error} 409 - Utilisateur non trouvé.
   */
  async updateUser(req, res, next) {
    const id = parseInt(req.params.userId);

    // Fetch the user
    const user = await User.findByPk(id);
    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    }

    // Update the user data
    const { email, name, password } = req.body;

    if (email) {
      user.email = email;
    }
    if (name) {
      user.name = name;
    }

    if (password) {
      user.password = password;
    }

    // Save the updated user data
    await user.save();

    res.status(200).json(user);
  },

  // Delete a user
  /**
   * DELETE /user/:userId
   * @summary Delete a specific user.
   * @param {number} userId.path.required - The ID of the user to delete.
   * @return {object} 200 - Success message indicating the user was deleted.
   * @throws {Error} 409 - Utilisateur non trouvé.
   */
  async deleteUser(req, res, next) {
    const id = parseInt(req.params.userId);

    // Fetch the user
    const user = await User.findByPk(id);

    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    } else {
      // Delete the user
      await user.destroy();

      res.status(200).json({ message: "Utilisateur supprimé" });
    }
  },
};

export { userController };
