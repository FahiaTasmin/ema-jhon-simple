//import React from 'react';
import fakeData from '../../../fakeData';
import React, { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

//<Product></Product>
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    //console.log(fakeData);
    return (
        <div className = "shop-container">
            <div className = 'product-container'>
                    {
                        products.map(element =><Product product = {element}></Product>)
                    }
            </div>
            <div className= "cart-container">
                <h1>This is cart</h1>
            </div>
            
        </div>
    );
};

export default Shop;