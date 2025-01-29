import { NavLink } from "react-router";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="d-flex w-100 justify-content-end">
      <nav className="d-flex align-items-center h-100">
        <NavLink to="/" className="text-decoration-none pe-4">
          Home
        </NavLink>
        <NavLink to="/animals" className="text-decoration-none pe-4">
          Animals
        </NavLink>
      </nav>
    </header>
  );
};
