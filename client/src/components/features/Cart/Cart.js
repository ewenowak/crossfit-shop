import styles from './Cart.module.scss';

import { Row, Col, Button } from "react-bootstrap";
import { getAllCartProducts, getCartSummary, increaseCartProductAmount } from "../../../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import {  faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartProduct from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";


const Cart = () => {
    const cartProducts = useSelector(getAllCartProducts);
   
   
    const cart = useSelector(getCartSummary);

    
    
    return (
        <div className={styles.root}>
            <h2>Welcome in Your Basket!</h2>
            {cartProducts.length === 0 &&
                <div className={styles.emptyBasket}>
                    <p>Your Basket is empty.</p>
                    <Button as={Link} to={"/"} variant="outline-dark">Back to the main page</Button> 
                </div>
            }
            {cartProducts.length !== 0 &&
                <Row>
                    <Col className={'col-12 col-lg-8'}>
                        {cartProducts.map(cartProduct => <CartProduct key={cartProduct.id} {...cartProduct}/>) }
                    </Col>
                    <Col className={'col-12 col-lg-4'}>
                        <div className={styles.summaryBasket}>
                            <h2>YOUR BASKET SUMMARY</h2>
                            <p>Summary: {cart} </p>
                            <Button as={Link} to={"/order"} variant="outline-dark">Order</Button> 
                        </div>

                    </Col>
                </Row>
            }
       </div>
      );
 }
 
 export default Cart;