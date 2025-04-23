import { sequelize } from './client-sequelize.ts';
import { Author } from './Author.ts';
import { Book } from './Book.ts';
import { Category } from './Category.ts';
import { User } from './User.ts';

Book.belongsToMany(Author, {
    through: "book_author",
    as: "authors",
    foreignKey: "book_id",
    otherKey: "author_id"
});

Author.belongsToMany(Book, {
    through: "book_author",
    as: "books",
    foreignkey: "auhtor_id",
    otherkey: "book_id"
});

Book.belongsToMany(Category, {
    through: "book_category",
    as: "categories",
    foreignKey: "book_id",
    otherKey: "category_id"
});

Category.belongsToMany(Book, {
    through: "book_category",
    as: "books",
    foreignkey: "categroy_id",
    otherkey: "book_id"
});

Book.belongsToMany(User, {
    through: "book_user",
    as: "users",
    foreignKey: "book_id",
    otherKey: "user_id"
});

User.belongsToMany(Book, {
    through: "book_user",
    as: "books",
    foreignkey: "user_id",
    otherkey: "book_id"
});

export { Author, Book, Category, User, sequelize };