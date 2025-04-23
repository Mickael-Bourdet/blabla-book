import 'dotenv/config';
import { Sequelize } from 'sequelize';

//console.log("PG_URL:", process.env.PG_URL);

const sequelize = new Sequelize(
  process.env.PG_URL,
  {
    define: {
      underscored: true,
      timestamps: false,
    },
  }
);

export { sequelize };

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à PostgreSQL réussie !");
  } catch (error) {
    console.error("❌ Impossible de se connecter à PostgreSQL:", error);
  }
})();