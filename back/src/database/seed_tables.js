import {
  sequelize,
  Author,
  Book,
  Category,
  User,
} from "../models/associations.js";

async function seedDatabase() {
  try {
    console.log("---");

    // sync models with database
    await sequelize.sync({ force: true });
    console.log("Base de donnée synchronisée ✅");
    console.log("Data inserted:");

 // create users
    const userData = [
        {
            email: "azerty@123.com",
            name: "Patoche",
            password:"Motdepasse01?",
           
          },
          {
            email: "azerty@234.com",
            name: "Pierroche",
            password:"Motdepasse01?",
           
          },
          {
            email: "azerty@456.com",
            name: "Loloche",
            password:"Motdepasse01?",
           
          },
          {
            email: "azerty@567.com",
            name: "Patocvefehe",
            password:"Motdepasse01?",
           
          },
          {
            email: "azerty@568.com",
            name: "Patocyetrvefehe",
            password:"Motdepasse01?",
           
          },
      
      
    ];

    const user = await User.bulkCreate(userData);
    console.log(userData.length, "User ")

    // create catégories
    const categoryData = [
      { name: "Romance" },
      { name: "Thriller" },
      { name: "Fantasy" },
      { name: "Science-fiction" },
      { name: "Développement personnel" },
      { name: "Biographie" },
      { name: "Jeunesse" },
      { name: "Manga" },
      { name: "Bande dessinée" },
      { name: "Classique" },
    ];

    const categories = await Category.bulkCreate(categoryData);
    console.log(categoryData.length, "Categories ");

    // create authors
    const authorData = [
      { name: "Anna Todd" },
      { name: "Colleen Hoover" },
      { name: "John Green" },
      { name: "Jane Austen" },
      { name: "Stephenie Meyer" },
      { name: "Jojo Moyes" },
      { name: "Ali Hazelwood" },
    ];

    const authors = await Author.bulkCreate(authorData);
    console.log(authorData.length, "Auteurs ");

    // create books

    const bookData = [
      {
        isbn: "9782253194583",
        title: "After, Tome 1",
        description:
          "After raconte l’histoire de Tessa Young, une étudiante sérieuse qui tombe amoureuse de Hardin Scott, un jeune homme impulsif. Leur relation passionnée les entraîne dans des montagnes russes émotionnelles, entre amour, colère, réconciliation et trahison.",
        published: "2016",
        cover_url: "dfc8bae545651e0e323c7478a55172a0",
        page_count: "816",
      },
      {
        isbn: "9781501110368",
        title: "It Ends With Us",
        description:
          "Lily Bloom, une jeune femme qui a grandi dans un environnement difficile, rencontre Ryle Kincaid, un chirurgien ambitieux. Leur relation tumultueuse la confronte à ses propres choix entre l'amour et la sécurité.",
        published: "2016",
        cover_url: "4360bc678aad68152f1a5bc25bd55177",
        page_count: "376",
      },
      {
        isbn: "9782092543030",
        title: "Nos étoiles contraires",
        description:
          " L’histoire poignante de deux adolescents, Hazel et Gus, qui luttent contre le cancer. Ils vivent une histoire d'amour extraordinaire, malgré la souffrance, et découvrent l'impact profond qu'ils ont l'un sur l'autre.",
        published: "2012",
        cover_url: "09d3c31afe62d073e3535401bde5205e",
        page_count: "326",
      },
      {
        isbn: "9782080460110",
        title: "Orgueil et Préjugés",
        description:
          "Elizabeth Bennet, l’héroïne du roman, lutte contre ses sentiments pour le riche et hautain Mr. Darcy. Ce classique explore les thèmes de l'amour, de la classe sociale et des malentendus.",
        published: "2024",
        cover_url: "9c6bf8dddc90de553658bbb0166db9c4",
        page_count: "448",
      },
      {
        isbn: "9780316015844",
        title: "Twilight",
        description:
          "Bella Swan, une adolescente ordinaire, tombe amoureuse de Edward Cullen, un vampire. Leur amour interdit fait face à de nombreux obstacles, notamment les dangers liés à la nature de Edward.",
        published: "2006",
        cover_url: "af48b3ed407c94c56ff201c9aeb20aa4",
        page_count: "498",
      },
      {
        isbn: "9782811210014",
        title: "Avant toi",
        description:
          "Alors que sa famille traverse des heures sombres et que tous les espoirs reposent sur elle, Lou, 26 ans, perd son travail. Pour retrouver un emploi, elle est prête à tout, ou presque : elle ne sera ni strip-teaseuse ni garde-malade. Elle finit par accepter un contrat de six mois pour tenir compagnie à un jeune tétraplégique. Malgré l’accueil glacial qu’il lui réserve, Lou va découvrir en Will un homme exceptionnel, brillant dans les affaires, accro aux sensations fortes et voyageur invétéré. Mais depuis son accident, il veut mettre fin à ses jours. Lou n’a que quelques mois pour le faire changer d’avis.",
        published: "2013",
        cover_url: "00a2b9b204bdd419773d7fb5d0bb99bf",
        page_count: "480",
      },
      {
        isbn: "9782381222738",
        title: "The Love Hypothesis",
        description:
          "Olive Smith, une doctorante en biologie, se lance dans une fausse relation avec Adam Carlsen, un professeur. Alors qu'ils feignent l'amour, des sentiments réels commencent à émerger, chamboulant leurs vies et leurs carrières.",
        published: "2022",
        cover_url: "08b507e9ed097859998cfe6106d7bdad",
        page_count: "480",
      },
    ];

    const books = await Book.bulkCreate(bookData);
    console.log(bookData.length, "Livres ");

    // join table book-author
    const bookAuthorAssociation = [
      { book_id: 1, author_id: 1 },
      { book_id: 2, author_id: 2 },
      { book_id: 3, author_id: 3 },
      { book_id: 4, author_id: 4 },
      { book_id: 5, author_id: 5 },
      { book_id: 6, author_id: 6 },
      { book_id: 7, author_id: 7 },
    ];

    // Insert associations Book-Author in join table  book_has_author
    await sequelize.models.book_has_author.bulkCreate(bookAuthorAssociation);

    // join table book-category
    const bookCategoryAssociation = [
      { book_id: 1, category_id: 1 },
      { book_id: 2, category_id: 1 },
      { book_id: 3, category_id: 1 },
      { book_id: 4, category_id: 1 },
      { book_id: 5, category_id: 1 },
      { book_id: 6, category_id: 1 },
      { book_id: 7, category_id: 1 },
    ];

    await sequelize.models.book_has_category.bulkCreate(
      bookCategoryAssociation
    );
  } catch (error) {
    console.error("Erreur lors du seeding :", error);
  } finally {
    console.log("---");
    console.log("\n✅ Seeding done!\n");

    // Fermer la connexion à la base de données
    await sequelize.close();
  }
}

seedDatabase();
