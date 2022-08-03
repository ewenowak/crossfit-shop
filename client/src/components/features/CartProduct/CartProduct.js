import styles from './CartProduct.module.scss';

import { Row, Col, Button } from "react-bootstrap";
import {  faMinus, faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { decreaseCartProductAmount, increaseCartProductAmount, removeProductFromCart } from "../../../redux/cartReducer";
import { useDispatch } from "react-redux";

const CartProduct = ( {id, title, image, price, totalPrice, amount}) => {

   
    const dispatch = useDispatch();

    const handleProductAmountIncrease = (newAmount, newTotalPrice) => {
        dispatch(increaseCartProductAmount({id, amount: newAmount, totalPrice: newTotalPrice}));
    };

    const handleProductAmountDecrease = (newAmount, newTotalPrice) => {
        dispatch(decreaseCartProductAmount({id, amount: newAmount, totalPrice: newTotalPrice}));
    };

    const handleRemoveProductFromCart = () => {
        dispatch(removeProductFromCart(id))
    }

    return (
        <Row key={id}>
            <Col className={'col-12 col-lg-4'}>
                <img src={image[0]} className='img-fluid shadow-4' alt='...' />
            </Col>
            <Col className={'col-12 col-lg-2'}> {title} <br /> Price: {price}</Col>
            <Col className={'col-12 col-lg-4'}>
                <Button variant="dark" onClick={() => handleProductAmountDecrease(amount, totalPrice)}><FontAwesomeIcon icon={faMinus} size="lg" /></Button>
                {' '}
                   {amount} 
                
                <Button variant="dark" onClick={() => handleProductAmountIncrease(amount, totalPrice)}><FontAwesomeIcon icon={faPlus} size="lg" /></Button>
                 Total Price: {totalPrice} 
            </Col>   
            <Col className={'col-12 col-lg-2'}> 
                <Button variant="dark" onClick={handleRemoveProductFromCart}><FontAwesomeIcon icon={faXmark} size="lg" /></Button>
            </Col>
        </Row> 
    )
 }
 
 export default CartProduct;