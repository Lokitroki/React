import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/recursos/logo.png"
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
          <Navbar data-bs-theme="dark">
            <Container>
              <Navbar.Brand className={styles.logo}><a href="https://universae.com/" target="_blank"><img src={logo} alt="logo" /></a></Navbar.Brand>
              <Nav>
                <Nav.Link className={styles.home} href="/">Home</Nav.Link>
                <Nav.Link className={styles.nav} href="/Game0">Ascensor</Nav.Link>
                <Nav.Link className={styles.nav} href="/Game1">Embarque</Nav.Link>
                <Nav.Link className={styles.nav} href="/Game2">EPIS</Nav.Link>
                <Nav.Link className={styles.nav} href="/Game3">Extincion</Nav.Link>
                <Nav.Link className={styles.nav} href="/Game4">Helicoptero</Nav.Link>
                <Nav.Link className={styles.nav} href="/Game5">Hemorragia</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
    }

export default NavBar