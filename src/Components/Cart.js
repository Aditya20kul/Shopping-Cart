import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
} from "reactstrap"

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    })
    return (
        <Container fluid>
            <h1 className="text-success mb-2">
                Your Cart
            </h1>
            <ListGroup>
                {cartItem.map(item =>(
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img 
                                height={80}
                                src={item.smallImage}
                                alt="xyz"
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary capitalize">
                                    <h4>{item.productName}</h4>
                                </div>
                                <span className="m-1 p-1">Price :- {item.productPrice}</span>
                                <Button className="mt-1" color="danger" onClick={()=>removeItem(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                
                ))}
            </ListGroup>
            {/* If EveryThing is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Your Amount for {cartItem.length} products is <span className="text-danger">Rs. {amount}</span>
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>Pay Here</Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">Cart is Empty</h1>
                )
            }

        </Container>
    );
}

export default Cart;