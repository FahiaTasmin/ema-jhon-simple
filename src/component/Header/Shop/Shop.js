//import React from 'react';
import fakeData from '../../../fakeData';
import React, { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../../Cart/Cart';

//<Product></Product>
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);  
    const [cart, setCart] = useState([]);
     
    const handleAddProduct = (product) =>{
      //  console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    //console.log(fakeData);
    return (
        <div className = "shop-container">
            <div className = 'product-container'>
                    {
                        products.map(element =><Product
                             product = {element} handleAddProduct = {handleAddProduct}
                             ></Product>)
                    }
            </div>
            <div className= "cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;