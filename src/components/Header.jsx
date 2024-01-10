import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="md:mx-auto py-3 md:py-6 mx-auto">
      <div className="header flex items-center">
        <div className="w-3/12 md:w-2/12">
          <a className="imglink" href="/" aria-label="Home Page">
            <img
              className="logo"
              src="https://wordpress-339479-3715247.cloudwaysapps.com/wp-content/uploads/oo-logo.svg"
              width="60px"
              alt="Ozay Logo"
            />
          </a>
        </div>
        <nav className="w-9/12 md:w-10/12 px-0 md:px-8 flex justify-end">
          <ul className="hidden gap-3 md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/alerts">Alerts</Link>
            </li>
            <li>
              <Link to="/badges">Badges</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <a href="https://github.com/ozayo">
                <FaGithub size="1.5em" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
