import styles from './Header.module.scss';

import NavBar from "../NavBar/NavBar";
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <div className={styles.root}>
        <NavBar />
            <div className={styles.header}>
                <Container>
                    <div className={styles.textHeader}>
                        <h1> Welcome to our Crossfit Shop! </h1>
                        <h2>Sleep, eat, exercise, repeat.</h2>
                    </div>
                </Container>
            </div>
        </div>
        
    )
 }
 
 export default Header;
 