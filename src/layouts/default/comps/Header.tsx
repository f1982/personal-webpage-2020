import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import routes from "../../../pages";



const Header = () => (
  <div>
    <h2>header</h2>
    <div className="navbar-start">
      {routes.map(route => (
        <NavLink
          key={route.path}
          exact={route.exact}
          to={route.path}
          className="navbar-item"
          activeClassName="has-text-link"
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  </div>
);

export default Header;
