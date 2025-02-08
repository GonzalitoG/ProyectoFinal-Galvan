import { Link, NavLink, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";

export const Navbar = () => {
  return (
    <>
      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} >Inicio</NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : '')} >Nosotros</NavLink>
          <NavLink to="/categorias" className={({ isActive }) => (isActive ? 'active' : '')} >Tienda</NavLink>
          <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'active' : '')} >Servicios</NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')} >Contacto</NavLink>
          {/* Aquí se incluye el CartWidget */}
          <CartWidget />
        </nav>
      </div>
    </>
  );
};
