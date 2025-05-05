const Footer = () => {
  return (
    <>
      <footer className="bg-header px-8 py-2 text-base font-bold hidden md:block bottom-0 w-full md:ml-64 ">
        <ul className="flex justify-between items-center">
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/mentions-legales">Mentions légales</a>
          </li>
          <li>
            © Promo Sushi <br /> Équipe BlaBlaBook
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
