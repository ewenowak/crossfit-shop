import { Row, Form, Col, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartSummary } from "../../../redux/cartReducer";
import { sendOrder } from "../../../redux/orderReducer";

const Order = () => {
    const dispatch = useDispatch();

    const cart = useSelector(getCartSummary);

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        }
        setValidated(true);
        dispatch(sendOrder({fName, lName, email, phone, address, zipCode, cart}));
    };
    
    return (
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col className={'col-12 col-lg-8'}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFirstName">
                            <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    value={fName}
                                    onChange={e => setFName(e.target.value)}
                                />
                            <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                value={lName}
                                onChange={e => setLName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationEmail">
                            <Form.Label>E-mail</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                type="text"
                                placeholder="E-mail"
                                aria-describedby="inputGroupPrepend"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your e-mail</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationPhone">
                            <Form.Label>E-mail</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                type="text"
                                placeholder="Phone e.g 678234567"
                                required
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your phone number</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Your delivery address" 
                                required 
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid"> Please provide a valid address.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationZip">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Zip Code" 
                            required
                            value={zipCode}
                            onChange={e => setZipCode(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </Col>
                <Col className={'col-12 col-lg-4'}>
                    <h2> SUMMARY ORDER</h2>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2"> To Pay </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly value={cart} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Confirm order</Button>
                </Col>
            </Row>
        </Form>
    )
}
 
export default Order;