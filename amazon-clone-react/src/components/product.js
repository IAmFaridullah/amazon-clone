import React, {useContext} from 'react';
import "./product.css";
import reducer from '../reducers/reducer';
import {useStateValue} from '../contexts/context';
import {useHistory} from 'react-router-dom';


const Product = (prop) => {

const [state, dispatch] = useStateValue();
const history = useHistory();

const add_Product = () => {
   if(state.user){
    dispatch(
        {
        type : 'ADD_PRODUCT',
        payload : {
        id : prop.id,
        title : prop.title,
        price : prop.price,
        rating : prop.rating,
        image : prop.image
        }
    })}else{
        history.push('/login')
    }
}


return (

    <div className="product">
        <div className="product__info">
        <p className="product__title">{prop.title}</p>
        <p className="product__rating">{prop.rating}</p>
        <p className="product__price">${prop.price}</p>
        </div>
        <img className="product__image" src={prop.image} alt="product_image" />
        <button onClick={add_Product} className="cart__button">Add to cart</button>
    </div>

)

}

export default Product;