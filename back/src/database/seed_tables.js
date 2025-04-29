import { sequelize, Author, Book, Category, User } from "../models/associations.js";

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
        name: "Admin",
        password: "Motdepasse01?",
      },
    ];

    const user = await User.bulkCreate(userData);
    console.log(userData.length, "User ");

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
        cover_url: "1459864478i/29781320",
        page_count: "816",
      },
      {
        isbn: "9781501110368",
        title: "It Ends With Us",
        description:
          "Lily Bloom, une jeune femme qui a grandi dans un environnement difficile, rencontre Ryle Kincaid, un chirurgien ambitieux. Leur relation tumultueuse la confronte à ses propres choix entre l'amour et la sécurité.",
        published: "2016",
        cover_url: "1725582473i/218517898",
        page_count: "376",
      },
      {
        isbn: "9782092543030",
        title: "Nos étoiles contraires",
        description:
          " L’histoire poignante de deux adolescents, Hazel et Gus, qui luttent contre le cancer. Ils vivent une histoire d'amour extraordinaire, malgré la souffrance, et découvrent l'impact profond qu'ils ont l'un sur l'autre.",
        published: "2012",
        cover_url: "1354914714i/16176099",
        page_count: "326",
      },
      {
        isbn: "9782080460110",
        title: "Orgueil et Préjugés",
        description:
          "Elizabeth Bennet, l’héroïne du roman, lutte contre ses sentiments pour le riche et hautain Mr. Darcy. Ce classique explore les thèmes de l'amour, de la classe sociale et des malentendus.",
        published: "2024",
        cover_url: "1730186529i/216428118",
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

      //  TODO : supprimer ici

      {
        isbn: "9791032710265",
        title: "Les Carnets de l’Apothicaire",
        description:
          " Maomao est toujours en mission au palais impérial, où elle continue d’utiliser son intelligence pour résoudre des mystères liés aux poisons et à la politique complexe qui règne dans l’empire. Ce tome approfondit les intrigues et les relations entre les personnages.",
        published: 2016,
        cover_url: "1636297509i/59539064",
        page_count: 159,
      },
      {
        isbn: "9782377352654",
        title: "Les Aventures de Sherlock Holmes",
        description:
          "Le détective Sherlock Holmes, avec son acolyte le Dr Watson, résout des mystères complexes à travers des enquêtes brillantes. Ce recueil regroupe certaines de ses aventures les plus célèbres.",
        published: 2019,
        cover_url: "1598474896i/55134619",
        page_count: 393,
      },
      {
        isbn: "9782070585205",
        title: "Harry Potter et la Coupe de Feu",
        description:
          "Harry participe au Tournoi des Trois Sorciers, une compétition magique qui met ses capacités à l'épreuve. Ce tome voit son monde s'assombrir, alors qu’il fait face à des épreuves dangereuses et à de nouveaux défis. C'est un tournant majeur dans la saga.",
        published: 2011,
        cover_url: "1508475182i/36444262",
        page_count: 774,
      },
      {
        isbn: "9782290319956",
        title: "Le Trône de Fer – Tome 5 : L’Invincible Forteresse",
        description:
          "Dans un monde où le pouvoir change de mains, ce tome explore les luttes politiques intenses après un grand bouleversement. De nouveaux défis et trahisons surgissent, et les protagonistes se battent pour garder leur place dans un jeu de pouvoir impitoyable.",
        published: 2002,
        cover_url: "1330189403i/2072931",
        page_count: 352,
      },
      {
        isbn: "9791032711262",
        title: "Frieren : Beyond Journey’s End - Tome 4",
        description:
          " Frieren continue son voyage après la fin de la quête des héros. Ce tome se concentre sur la découverte de nouvelles régions et sur les rencontres avec des personnages qui vont remettre en question sa vision du monde et du passage du temps.",
        published: 2022,
        cover_url: "1657191679i/61405470",
        page_count: 188,
      },
      {
        isbn: "9782266260787",
        title: "Hunger Games - Tome 2",
        description:
          "Dans un futur dystopique, Katniss Everdeen, une jeune fille, doit participer à un combat à mort télévisé avec d'autres enfants pour divertir les élites. Un récit de survie, de rébellion et de résistance.",
        published: 2008,
        cover_url: "1451581575i/28415052",
        page_count: 432,
      },
      {
        isbn: "9782253088752",
        title: "Frankenstein",
        description:
          "Le Dr. Frankenstein créé un monstre à partir de morceaux de cadavres, mais se retrouve horrifié par sa création. Un roman gothique qui interroge la responsabilité scientifique, la solitude et l’éthique.",
        published: 2009,
        cover_url: "1364186726i/7261829",
        page_count: 345,
      },
      {
        isbn: "9782012101401",
        title: "Astérix chez les Bretons",
        description:
          "Astérix et son ami Obélix, deux irréductibles Gaulois, se battent contre les Romains et affrontent divers défis avec humour et esprit. Une série pleine de références à l’histoire et la culture européenne.",
        published: 2004,
        cover_url: "1419178691i/900568",
        page_count: 48,
      },
      {
        isbn: "9782212567595",
        title: "Naruto - Tome 41",
        description:
          "Ce tome marque un tournant majeur dans l'histoire, alors que Naruto et ses alliés se lancent dans une guerre contre l'Akatsuki. Des batailles épiques ont lieu, et des révélations importantes sur les origines de certains personnages changent la dynamique de la guerre. L'émotion et l'intensité des combats sont à leur apogée.",
        published: 2009,
        cover_url: "1363037606i/6218526",
        page_count: 192,
      },
      {
        isbn: "9782505005582",
        title: "L’art subtil de s’en foutre",
        description:
          "Un livre de développement personnel qui renverse les conventions habituelles. Mark Manson prône une approche plus réaliste du bonheur, en se concentrant sur les choses qui comptent vraiment et en abandonnant la quête d'une vie parfaite",
        published: 2017,
        cover_url: "1533568095i/41057918",
        page_count: 188,
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

    await sequelize.models.book_has_category.bulkCreate(bookCategoryAssociation);

    const userBooksReadAssociation = [
      { user_id: 1, book_id: 1 },
      { user_id: 1, book_id: 3 },
      { user_id: 2, book_id: 2 },
      { user_id: 3, book_id: 4 },
      { user_id: 3, book_id: 5 },
    ];

    // Insérer des associations dans la table de jointure book_read
    await sequelize.models.book_read.bulkCreate(userBooksReadAssociation);

    const bookToReadData = [
      { user_id: user[0].id, book_id: books[0].id },
      { user_id: user[0].id, book_id: books[1].id },
      { user_id: user[1].id, book_id: books[2].id },
      { user_id: user[1].id, book_id: books[3].id },
      { user_id: user[2].id, book_id: books[4].id },
    ];

    // Insérer les associations dans la table de jonction
    await sequelize.models.book_to_read.bulkCreate(bookToReadData);
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
