import { Book } from "../models/associations.js";

const adminController = {
  /**
   *  Add a new book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {Object} Book
   */

  async AddNewBook(req, res, next) {
    res.send("ok");
  },
};

export default adminController;
