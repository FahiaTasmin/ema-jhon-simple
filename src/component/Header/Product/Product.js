import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img}/* {props.product.img} */ alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}{props.product.name}</h4>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button className = "main-button" 
                onClick = {() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;