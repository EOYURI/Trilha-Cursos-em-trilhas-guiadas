import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Início" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/conteudo", label: "Conteúdo" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        <span className="navbar__brand-mark" aria-hidden="true" />
        trilha
      </NavLink>

      <nav className="navbar__links" aria-label="Navegação principal">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
