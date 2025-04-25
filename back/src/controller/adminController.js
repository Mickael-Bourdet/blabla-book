import { Book } from "../models/associations.js";
import Joi from "joi";

const adminController = {
  /**
   *  Add a new book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {Object} Book
   */

  async AddNewBook(req, res, next) {
    const { isbn, title, description, published, cover_url, page_count } =
      req.body;

    //  Validate body :
    // isbn not null, exact length 13, required
    // title not null

    const createBookSchema = Joi.object({
      isbn: Joi.string()
        .length(13)
        .trim()
        .pattern(/^\d{13}$/) // only numbers
        .required()
        .messages({
          "string.base": "L'isbn doit être une chaîne de caractère",
          "string.length": "L'isbn doit faire exactement 13 caractères",
          "string.pattern": "L'isbn ne doit contenir que des chiffres",
          "any.required": "L'isbn est requis",
        }),

      title: Joi.string().min(1).trim().required().messages({
        "title.base": "Le titre doit être une chaîne de caractère",
        "title.min": "Le titre doit contenir au moins 1 caractère",
        "any.required": "Le titre est requis",
      }),

      description: Joi.string().trim().allow(null, ""),

      published: Joi.integer()
        .positive()
        .max(new Date().getFullYear() + 1)
        .messages({
          "published.base": "L'année de publication doit être un nombre",
          "published.max":
            "L'année de publication doit être postérieur à l'an 0",
          "published.max":
            "L'année de publication ne doit pas dépasser l'année actuel",
        }),

      cover_url: Joi.string().trim().allow(null, ""),

      page_count: Joi.integer().positive().messages({
        "page.base": "Le nombre de pages doit être un nombre",
        "page.min": "Le nombre de pages doit être un nombre positif",
      }),
    });
  },
};

export default adminController;
