import React from 'react'
import "./checkout.css"
import Basket_product from './basket_product';
import {useStateValue} from '../contexts/context';
import {useHistory} from 'react-router-dom';

const Checkout = () => {

const [{basket, user}, dispatch] = useStateValue();
const history = useHistory();

let getBasketTotal = basket.reduce((amount, item) => item.price + amount, 0);

return (


    <div>
    <div className="checkout">
        <div className="checkout__left">
            <h1 className="checkout__title">{user ? user?.user.email + '\'s Shopping Basket' : 'Your Shopping Basket'}</h1>
            {basket.map((item) => (
                <Basket_product key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating}/>
            ))}
        </div>

        <div className="checkout__right">
            <p>Subtotal ({basket.length + ' items'}): <strong>{"$" + getBasketTotal.toFixed(2)}</strong></p>
            <div className="checkbox">
            <input type="checkbox"/>
            <span>This order contains a gift</span>
            </div>

            <button className="proceed__button"><strong>Proceed to Checkout</strong></button>
        </div>
    </div>
    </div>

)

}

export default Checkout;