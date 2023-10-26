import React from "react";
import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus, FaUser } from "react-icons/fa";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        LOGO
      </NavLink>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/bestSeller" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Best Seller
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={classes.list}>
          <li className={classes.icon}>
            <Link to={"/auth"}>
              <FaUser />
            </Link>
          </li>
          <li className={classes.icon}>
            <FaCartPlus style={{ color: "#ffff", fontSize: "20px" }} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
