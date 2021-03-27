import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from "reactstrap"
const Product = ({product, addInCart}) => {
    console.log(product.productName)
    return(
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={product.smallImage} alt="Card DP"/>
            <CardBody className="text-center">
                <CardTitle>Name - {product.productName}</CardTitle>
                <CardText className="secondary">Rs. {product.productPrice}</CardText>
                <Button color="success" onClick={() => addInCart(product)}>Buy Now</Button>
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