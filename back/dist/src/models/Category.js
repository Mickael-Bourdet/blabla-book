import { Model, DataTypes, } from "sequelize";
import { sequelize } from "./client-sequelize.js";
export class Category extends Model {
}
Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: "category",
});
//# sourceMappingURL=Category.js.map