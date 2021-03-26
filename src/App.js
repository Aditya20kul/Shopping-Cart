import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import BuySection from './Components/BuySection';

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
        setCartItem([...cartItem, item]);
    }

    const buyNow = () => {
        setCartItem([])
        toast("Purchase Complete", {
            type: "success"
        })
    }

    const removeItem = (item) => {
        setCartItem(cartItem.filter(i => i.id !== item.id))
    };

    return(
        <div className="mt-4">
             <BuySection addInCart={addInCart}/>
        </div>
    );
}

export default App;