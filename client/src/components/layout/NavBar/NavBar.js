import styles from './NavBar.module.scss';
import { Navbar, NavbarBrand, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = () => {
    return (
        <Navbar  expand="lg" className={`mt-4 mb-4 rounded ${styles.root}`}>
            <Container>
                <NavbarBrand className={styles.logo} as={NavLink} to="/"> 
                    <h2>CrossFit Shop</h2>
                </NavbarBrand>
                <Nav>
                    <Nav.Link as={NavLink} to="/">
                        <p>Home</p>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} className={styles.navIcon} size="lg" /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
       
    )
}
export default NavBar;

 