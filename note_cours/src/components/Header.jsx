import { Link } from "react-router-dom";

const Header = ({ n }) => {
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
        <li>
          "n" : {n}
        </li>
      </ul>
    </nav>
  );
};
export default Header;
