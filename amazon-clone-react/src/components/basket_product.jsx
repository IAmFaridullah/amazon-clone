import React, {useEffect} from 'react';
import './basket_product.css';
import {useStateValue} from '../contexts/context';

const Basket_product = (prop) => {

const [{basket}, dispatch] = useStateValue();

const removeProduct = () => {
    dispatch({
        type : 'REMOVE_PRODUCT',
        id : prop.id
    })
}


    return(
        <div className='basket_product'>
            <div className='basket__product-image'>
               <img src={prop.image} alt="product_image" />
            </div>
            <div className='basket__product-info'>
                <div className="product__info-upper">
                    <p className='product__title'>
                        {prop.title}
                    </p>
                    <p className='product__rating'>{prop.rating}</p>
                    <div className='product__price'>
                        <strong>{'$' + prop.price}</strong>
                    </div>
                </div>
                <button onClick={removeProduct} className='product__button'>Remove from cart</button>
            </div>
        </div>
    )

}

export default Basket_product;