import React from 'react';
import classNames from 'classnames';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './index.module.css';
import logo from '../../img/Delantech.png';

import { Link } from 'react-router-dom';
import { Hamburger } from './Hamburger';
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
          <Nav className="me-auto">{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // return (
  // <div className="container">
  //     <nav
  //       className={`navbar navbar-expand-sm navbar-light fixed-top p-3 ${classNames(styles.NavBar)}`
  //       }
  //     >

  //       {/* <MenuBar clicked={() => setToggleState(!toggleBar)} /> */}
  //       {/* {toggleBar ? ( */}
  //         <div
  //           className={
  //             'collapse navbar-collapse d-flex justify-content-between ' +
  //              classNames(styles.Links)
  //           }
  //           id="navbarSupportedContent"
  //         >
  //           <ul className="navbar-nav mr-auto ">
  //             {links}
  //          </ul>
  //           <div>
  //               <Link className="text-light" to="/carts">
  //                 <i className="fas fa-shopping-cart "></i>
  //                 <span className={' mx-2 '}>
  //                 </span>
  //               </Link>
  //           </div>
  //         </div>
  //       {/* ) : null} */}
  //     </nav>
  //   </div>
  // )
};
