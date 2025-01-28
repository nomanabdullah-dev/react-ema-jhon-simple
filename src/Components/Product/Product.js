import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="product-image" />
            </div>
            <div>
                <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                { props.showAddToCart && <button 
                    className='main-button'
                    onClick={()=>props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={ faShoppingCart } /> add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;<h3>This is product</h3>