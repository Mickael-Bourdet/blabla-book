import { Link } from "react-router-dom";

const Footer = () => {
  return (
<<<<<<< HEAD
    <>
      <footer className="bg-header px-8 py-2 text-base font-bold hidden md:block bottom-0  md:ml-64 ">
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
=======
    <footer className="bg-header px-8 py-2 text-base font-bold hidden md:block bottom-0 w-full pl-80">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>
          <Link to="/mentions-legales">Mentions légales</Link>
        </li>
        <li>
          © Promo Sushi <br /> Équipe BlaBlaBook
        </li>
      </ul>
    </footer>
>>>>>>> dev
  );
};

export default Footer;
