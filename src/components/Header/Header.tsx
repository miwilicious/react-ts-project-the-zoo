import { NavLink } from "react-router";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="w-100  d-flex justify-content-between align-items-center  px-4">
      <div className="shadow-into-light logo">The Zoo</div>

      <nav className="d-flex">
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
