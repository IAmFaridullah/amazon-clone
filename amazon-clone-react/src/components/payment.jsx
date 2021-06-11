import React from 'react';
import './payment.css';
import {useStateValue} from '../contexts/context';
import Basket_product from './basket_product';



const Payment = (prop) => {

const [state, dispatch] = useStateValue();


return(

        <div className="payment">
            <div className="payment__container">
                <div className="section">
                    <div className="section__title">
                        <h3>Address Details</h3>
                    </div>

                    <div className="section__detail">
                        <p> Email : faridullahkhan645@gmail.com</p>
                        <p>Address : New nasarabad muhallah zhob, pakistan</p>
                    </div>
                </div>

                <div className="section">
                    <div className="section__title">
                        <h3>Cart items overview</h3>
                    </div>

                    <div className="section__detail">
                        
                        {state.basket.map((item) => (
                                <Basket_product 
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                        ))}

                    </div>
                </div>

                <div className="section">
                    <div className="section__title">
                        <h3>Pay here</h3>
                    </div>

                    <div className="section__detail">
                        
                    </div>
                </div>

            </div>
        </div>
    
    )


}

export default Payment;