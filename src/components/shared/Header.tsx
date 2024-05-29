import { Link } from "react-router-dom";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto px-5 h-16">
      <Link to="/">
        <img className="size-12" src="/images/logo.png" alt="logo" />
      </Link>

      <Nav />
      <MobileMenu />
    </header>
  );
};

export default Header;
