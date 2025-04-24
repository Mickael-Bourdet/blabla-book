import { sequelize } from "../models/associations.js";

try {
  await sequelize.drop();

  await sequelize.sync({ force: true, alter: true });

  process.exit(0);
} catch (error) {
  console.error(error);

  process.exit(1);
}
