import { User, Book, Author } from "../models/associations.js";

const userController = {
  //get one user info wiht associate table
  async getOneUser(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the user
    const user = await User.findByPk(id, {
        include: ["books_already_read", "books_wish_read"],
    });
    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    }

    res.status(200).json(user);
  },

  //get update one user :name email password
  async updateUser(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the user
    const user = await User.findByPk(id);
    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    }
    // get the req body and change
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
    // save change
    await user.save();

    res.status(200).json(user);
  },

  //delete one user
  async deleteUser(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the user
    const user = await User.findByPk(id);

    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    } else {
      //delete the user
      await user.destroy();

      res.status(200).json({ message: "Utilisateur supprimé" });
    }
  },
};

export { userController };
