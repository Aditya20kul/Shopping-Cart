import React, {useState, useEffect} from 'react'
import Axios from 'axios';

import faker from 'faker';
import {Container, Col, Row} from 'reactstrap'
import Product from './Product';

const API_KEY = "563492ad6f91700001000001846b2d62700f423eb4c059538d0c45cf"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localurl = "https://jsonware.com/json/57d417ead33abc3045d24507b1c9f032.json"

const BuySection = ({addInCart}) => {
    const [product, setProduct] = useState([])
    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header:{
    //             Authorization: API_KEY
    //         }
    //     })
    // }

    const fetchPhotos = async () =>{
        const { data } = await Axios.get(localurl);

        const { photos } = data;

        const allProduct = photos.map(photo =>({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: faker.random.word(),
            productPrice: faker.commerce.price(),
            id: faker.datatype.uuid()
        }))
        setProduct(allProduct);
    };
    useEffect(()=>{
        fetchPhotos();
    },[])

    return(
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                
                {product.map(prod => (
                    <Col key={prod.id} sm="4">
                        <div className="p-2 m-2">
                        <Product product={prod}/>
                        </div>
                    </Col>                  
                ))}
                
            </Row>
        </Container>
    );
}

export default BuySection;