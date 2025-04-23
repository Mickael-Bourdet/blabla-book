import { Sequelize } from "sequelize";
import "dotenv/config";

// Initialise une instance de Sequelize pour la connexion à la base de données PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  define: {
    underscored: true, // Utilise des noms de colonnes en snake_case
    timestamps: true, // Active les colonnes de timestamp (createdAt, updatedAt)
  },
  dialect: "postgres", // Spécifie le dialecte PostgreSQL
  logging: false, // Désactive les logs SQL dans la console
});

export { sequelize };

/**
 * Fonction IIFE (Immediately Invoked Function Expression) pour tester la connexion à PostgreSQL
 * et synchroniser les modèles avec la base de données.
 */
(async () => {
  try {
    // Teste la connexion à la base de données
    await sequelize.authenticate();
    console.log("✅ Connexion à PostgreSQL réussie !");

    // Synchronise les modèles définis avec la base de données
    // L'option `alter: true` modifie les tables pour correspondre aux modèles définis
    await sequelize.sync({ force: true });
    console.log("🧱 Base synchronisée !");
  } catch (error) {
    // Affiche une erreur si la connexion ou la synchronisation échoue
    console.error("❌ Erreur connexion DB :", error);
  }
})();
