import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
