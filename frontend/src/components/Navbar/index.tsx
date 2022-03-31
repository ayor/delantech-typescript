import React from 'react';
import classNames from 'classnames';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './index.module.css';
import logo from '../../img/Delantech.png';
import { store } from "../../store";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { IState } from '../../interfaces';
interface NavLink {
  title: string;
  route: string;
}

const navlists: NavLink[] = [
  {
    title: 'Products',
    route: '/products',
  },
  {
    title: 'Services',
    route: '/services',
  },
  {
    title: 'Team',
    route: '/team',
  },

];


export const AppNavbar = (): JSX.Element => {

  const cart = useSelector<IState, IState>(state => state);


  const links = navlists.map((link: NavLink, index: number): JSX.Element => {
    return (
      <Nav.Link key={index}>
        <Link className="nav-link mr-2" to={link.route}>
          <span>{link.title}</span>
        </Link>
      </Nav.Link>
    );
  });
  return (
    <Navbar fixed="top" variant="dark" bg="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            <img
              src="/img/Delantech.png"
              width="150"
              height="20"
              alt="brand-logo"
            />
          </Link>
        </Navbar.Brand>
        {/* as={Hamburger}*/}
        <Navbar.Toggle aria-controls="delan-nav-bar" />
        <Navbar.Collapse id="delan-nav-bar">
          <Nav className="me-auto">
            {links}
          </Nav>
          <Nav>
            <Nav.Link >
              <Link className="nav-link mr-2" to="/cart">
                <i className="fa fa-shopping-cart " aria-hidden="true">
                  <span className="delan-cart-val">{cart.items?.length || 0}</span>
                </i>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};
