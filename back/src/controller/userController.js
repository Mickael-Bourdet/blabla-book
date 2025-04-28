import { User, Book, Author } from "../models/associations.js";

const userController = {
  //get one user info wiht associate table
  async getOneUser(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the user
    const result = await User.findByPk(id, {
      include: ["books_is_read", "books_maybe_read"],
    });
    if (!result) {
      const error = new Error("User not found");
      error.status = 409;
      return next(error);
    }

    res.status(200).json(result);
  },

  //get update one user :name email password
  async updateUser(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the user
    const result = await User.findByPk(id);
    if (!result) {
      const error = new Error("User not found");
      error.status = 409;
      return next(error);
    }
    // get the req body and change
    const { email, name, password } = req.body;

    if (email) {
      result.email = email;
    }
    if (name) {
      result.name = name;
    }

    if (password) {
      result.password = password;
    }
    // save change
    await result.save();

    res.status(200).json(result);
  },

  //delete one user
  async deleteUser(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the user
    const user = await User.findByPk(id);

    if (!user) {
      const error = new Error("User not found");
      error.status = 409;
      return next(error);
    } else {
      //delete the user
      await user.destroy();

      res.status(200).json({ message: "delete succes" });
    }
  },
};

export { userController };
