const Footer = () => {
  return (
    <>
      <footer className="bg-header px-8 py-2 text-base font-bold hidden md:block relative bottom-0   ">
        <ul className="flex justify-between items-center">
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/mentions">Mentions légales</a>
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
