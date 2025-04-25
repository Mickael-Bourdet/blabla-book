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
    //  Before all, validate body :
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

      published: Joi.number()
        .integer()
        .positive()
        .max(new Date().getFullYear())
        .messages({
          "published.base": "L'année de publication doit être un nombre",
          "published.max":
            "L'année de publication doit être postérieur à l'an 0",
          "published.max":
            "L'année de publication ne doit pas dépasser l'année actuel",
        }),

      cover_url: Joi.string().trim().allow(null, ""),

      page_count: Joi.number().integer().positive().messages({
        "page.base": "Le nombre de pages doit être un nombre",
        "page.min": "Le nombre de pages doit être un nombre positif",
      }),
    });

    // error is :
    // undefined if no error
    // an object with error details if any errors
    const error = createBookSchema.validate(req.body, {
      abortEarly: false,
    }).error;

    // if error in not undefined, the API return an error
    if (error) {
      return next({
        statusCode: 400,
        message: error.details.map((detail) => detail.message),
      });
    }

    // Get the params
    const { isbn, title, description, published, cover_url, page_count } =
      req.body;

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
};

export default adminController;
