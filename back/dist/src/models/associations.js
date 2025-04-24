import { sequelize } from "./client-sequelize.js";
import { Author } from "./Author.js";
import { Book } from "./Book.js";
import { Category } from "./Category.js";
import { User } from "./User.js";
import { BookHasAuthor } from "./BookAuthor.js";
Book.belongsToMany(Author, {
    through: BookHasAuthor,
    as: "authors",
    foreignKey: "book_id",
    otherKey: "author_id",
});
Author.belongsToMany(Book, {
    through: BookHasAuthor,
    as: "books",
    foreignKey: "author_id",
    otherKey: "book_id",
});
Book.belongsToMany(Category, {
    through: "book_has_category",
    as: "categories",
    foreignKey: "book_id",
    otherKey: "category_id",
});
Category.belongsToMany(Book, {
    through: "book_has_category",
    as: "books",
    foreignKey: "category_id",
    otherKey: "book_id",
});
Book.belongsToMany(User, {
    through: "book_read",
    as: "users_has_read",
    foreignKey: "book_id",
    otherKey: "user_id",
});
User.belongsToMany(Book, {
    through: "book_read",
    as: "books_is_read",
    foreignKey: "user_id",
    otherKey: "book_id",
});
Book.belongsToMany(User, {
    through: "book_to_read",
    as: "users_need_to_read",
    foreignKey: "book_id",
    otherKey: "user_id",
});
User.belongsToMany(Book, {
    through: "book_to_read",
    as: "books_maybe_read",
    foreignKey: "user_id",
    otherKey: "book_id",
});
export { Author, Book, Category, User, sequelize };
//# sourceMappingURL=associations.js.map