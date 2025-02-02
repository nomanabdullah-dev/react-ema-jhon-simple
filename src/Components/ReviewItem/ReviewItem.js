import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBotton: '1px solid lightgrey',
        marginBotton: '5px',
        paddingBotton: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle}  className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: ${price}</small></p>
            <br />
            <button className='main-button' onClick={ ()=> props.removeProduct(key) }>Remove</button>
        </div>
    );
};

export default ReviewItem;