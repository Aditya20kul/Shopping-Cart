import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from "reactstrap"
const Product = ({product}) => {
    console.log(product.productName)
    return(
        <Card style={{ backgroundColor: '#34495e', borderColor: '#333', color: 'white'}}>
            <CardImg top width="100%" src={product.smallImage} alt="Card DP"/>
            <CardBody>
                <CardTitle>Name - {product.productName}</CardTitle>
                <CardText>Rs. {product.productPrice}</CardText>
                <Button color="success">Add Product</Button>
            </CardBody>
        </Card>
        // <div>
        //     <img src={product.smallImage} alt="Small Profile"></img>
        //     <h1>{product.productName}</h1>
        //     <h2>{product.productPrice}</h2>
        // </div>
    );
}

export default Product;