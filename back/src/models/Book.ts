import { Model, DataTypes } from 'sequelize';
import { sequelize } from './client-sequelize.ts';

interface IBook {
    id: number;
    isbn: string;
    title: string | null;
    description: string | null;
    published: string | null;
    cover_url: string | null;
    page_count: string | null;
}

export class Book extends Model<IBook> 
    implements IBook {
        declare id: number;
        declare isbn: string;
        declare title: string;
        declare description: string | null;
        declare published: string | null;
        declare cover_url: string | null;
        declare page_count: string;
    }

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        isbn: {
            type: DataTypes.STRING(13),
            allowNull: false,
            unique: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        published: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        cover_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        page_count: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        sequelize,
        tableName: 'book',
    }
)