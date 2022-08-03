import styles from './AllProducts.module.scss';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsReducer';
import { Link } from "react-router-dom";

import {  faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllProducts = () => {
const  products = useSelector(state => getAllProducts(state.products)); 

  return (
    <Row>
    {products && products.map( product => 
        
        <Col key={product._id}>
            <Card style={{ width: '18rem', marginBottom: '20px', borderColor: '#ffa801' }}>
            <Card.Img variant="top" src={product.image[0]}/>
            <div className={styles.cardStyle}>
            <Card.Body>    
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Price from <b>{product.price}</b> $
                  </Card.Text>
            </Card.Body>
            <Card.Body>
            <Button variant="outline-dark" as={Link} to={"/product/" + product._id}  className={styles.btnInf}>More inf</Button>
            {' '}
            <Button variant="outline-dark" as={Link} to={"/cart" } ><FontAwesomeIcon icon={faCartShopping} size="sm" /></Button>
            </Card.Body>
            </div>
            </Card>
        </Col>
       
    )};
    </Row>
  );
};
export default AllProducts;