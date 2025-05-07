import { User } from "../models/associations.js";
import { ApiError } from "../middlewares/ApiError.js";
import { compare, hash } from "../services/authService.js";
import { isDisposableEmail, isDomainValid } from "../services/emailService.js";

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
    const id = req.user?.userId;
    if (!id) {
      return next(new ApiError("Non autorisé !", 401));
    }

    // Fetch the user with associated books
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "email"],
      include: ["books_already_read", "books_wish_read"],
    });
    if (!user) {
      return next(new ApiError("Utilisateur non trouvé", 409));
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
    const id = req.user?.userId;
    if (!id) {
      return next(new ApiError("Non autorisé !", 401));
    }

    // Fetch the user
    const user = await User.findByPk(id);
    if (!user) {
      return next(new ApiError("Utilisateur non trouvé", 404));
    }

    // Update the user data
    const { email, name, password, currentPassword } = req.body;

    if (email) {
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser && existingUser.id !== id) {
        return next(new ApiError("E-mail déjà utilisé", 409));
      }

      if (isDisposableEmail(email)) {
        return next(
          new ApiError(
            "Les adresses e-mail temporaires ne sont pas acceptées",
            400
          )
        );
      }

      const domainIsValid = await isDomainValid(email);
      if (!domainIsValid) {
        return next(new ApiError("Ce domaine n'est pas valide.", 400));
      }

      user.email = email;
    }

    if (name) {
      user.name = name;
    }

    if (password) {
      if (!currentPassword) {
        return next(
          new ApiError(
            "Le mot de passe actuel est requis pour le modifier",
            400
          )
        );
      }

      const passwordValid = await compare(currentPassword, user.password);
      if (!passwordValid) {
        return next(new ApiError("Mot de passe actuel incorrect", 401));
      }

      user.password = await hash(password);
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
    const id = req.user?.userId;
    if (!id) {
      return next(new ApiError("Non autorisé !", 401));
    }

    // Fetch the user
    const user = await User.findByPk(id);

    if (!user) {
      return next(new ApiError("Utilisateur non trouvé", 404));
    } else {
      // Delete the user
      await user.destroy();
      res.sendStatus(204);
    }
  },
};

export { userController };
