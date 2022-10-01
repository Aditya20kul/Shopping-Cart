import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import BuySection from './Components/BuySection';
import {Container, Row, Col} from 'reactstrap'
import Cart from './Components/Cart';


const App = () => {
    const [cartItem, setCartItem] = useState([])

    const addInCart = (item) => {
        const isAlreadyAdded = cartItem.findIndex(function(array){
            return array.id === item.id
        })
        if(isAlreadyAdded !== -1){
            toast("Already Added In Cart", {
                type: "error"
            })
        }
        else{
            setCartItem([...cartItem, item]);
            toast(`${item.productName} has been Added Into the Cart`, {
                type: "info"
            })
        }
    }

    const buyNow = () => {
        setCartItem([])
        toast("Purchase Completed", {
            type: "success"
        })
    }

    const removeItem = (item) => {
        setCartItem(cartItem.filter(i => i.id !== item.id))
    };

    return(
        <Container fluid>
            <ToastContainer/>
            <Row>
                <Col md="8">
                    <BuySection addInCart={addInCart}/>
                </Col>
                <Col md="4">
                    <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;