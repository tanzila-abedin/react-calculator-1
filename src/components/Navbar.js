import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'Quotes', path: '/quotes' },
];

const Nav = styled.nav`
  font-size: 18px;
  margin-bottom: 10px;

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 10px;
  }

  a {
    color: #192a56;
    text-decoration: none;
  }

  .current {
    color: #0097e6;
    border-bottom: 1px solid black;
  }
`;

const Navbar = () => (
  <Nav>
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <NavLink exact to={link.path} activeClassName="current">{link.name}</NavLink>
        </li>
      ))}
    </ul>
  </Nav>
);

export default Navbar;
