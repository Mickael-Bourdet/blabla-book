const Footer = () => {
  return (
    <>
      <footer className="bg-header p-4 text-sm font-bold hidden md:block relative bottom-0 w-full  ">
        <ul className="flex justify-between">
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/legal">Mentions légales</a>
          </li>
          <li>© Promo Sushi - Équipe BlaBlaBook</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
