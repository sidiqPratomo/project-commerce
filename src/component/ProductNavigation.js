import { NavLink } from "react-router-dom";

import classes from "./ProductNavigation.module.css";

function ProductNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/new" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              New Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProductNavigation;
