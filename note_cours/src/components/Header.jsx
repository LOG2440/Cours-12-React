import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/paragraphs">Paragraphes</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/hooks/user">Fetch</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
