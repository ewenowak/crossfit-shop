import {  Col, Card, CardGroup, Button } from "react-bootstrap";
import {  useParams, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../../../redux/productsReducer";
import styles from './Product.module.scss';
import { addProductToCart } from "../../../redux/cartReducer";
import { useEffect } from "react";
import { fetchGetProductById } from "../../../redux/productsReducer";

const Product = () => {
   
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(fetchGetProductById(id));
    }, [dispatch, id]); 


 const product = useSelector(state => getProductById(state.products, id)); 

   const navigate = useNavigate();
    
    const handleClickAddToCart = e => {
        e.preventDefault(); 
        dispatch(addProductToCart(product));
        navigate('/');
      };

    if(!product) return <Navigate to="/" />
    return (
        <>
           <Col className={styles.mainPhoto}
                style={{ 
                    background: `url("${product.image[0]}") center center/cover no-repeat`,
                }} 
            />  
            <div className={styles.productContainer}>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            Price from <b>{product.price}</b>
                        </Card.Text>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <CardGroup>
                    <Card>
                        <Card.Img src={product.image[1]} />
                    </Card>
                    <Card>
                        <Card.Img src={product.image[2]} />
                    </Card>
                    <Card>
                        <Card.Img src={product.image[3]} />
                    </Card>
                </CardGroup>
                <div style={{marginTop: '40px'}}></div>
                <Button onClick={handleClickAddToCart} variant="outline-dark">Add to Cart</Button>
            </Col>
            </div>
        </>
    );
};
export default Product;

