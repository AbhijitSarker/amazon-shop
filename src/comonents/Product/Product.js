import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>

                <p>Price: ${price}</p>
                <p>Ratings: {ratings} Stars</p>
                <p> <small>Seller: {seller}</small> </p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>

        </div>
    );
};

export default Product;