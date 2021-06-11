import React from 'react'
import './header.css'
import logo from "../images/amazon_logo.png"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from '../contexts/context';
import { Link} from 'react-router-dom';
import {auth} from '../authentication/firebase';

function Header() {

const [state, dispatch] = useStateValue();

const signout = () => {
    if(state.user){
        auth.signOut();
        dispatch({
            type : 'REMOVE_USER',
            user : null
        });

        dispatch({
            type : 'EMPTY_BASKET',
        });
        }
}

    return (

        <div className="header">
        
        <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
        </Link>
        <div className="search__box">
            <div className="search__input">
            <input type="text" />
            </div>
            <div className="search__icon-box">
            <SearchIcon style={{ fontSize: 35, marginTop: -8 }} />
            </div>
        </div>

        <div className="menu">

            <Link to={!state?.user ? '/login' : ''} style={{textDecoration: 'none', color: 'white'}}>
            <div onClick={signout} className="menu__options">
                <span className="menu__first-option">
                    Hello {state.user ? 'User' : 'Guest'}
                </span>
                <span className="menu__second-option">
                    {state?.user ? 'Sign Out' : 'Sign In'}
                </span>
            </div>
            </Link>
            <div className="menu__options">
            <span className="menu__first-option">
                Returns
            </span>
            <span className="menu__second-option">
            &#x00026; order
            </span>
            </div>
            
            <div className="menu__options">
            <span className="menu__first-option">
                Your
            </span>
            <span className="menu__second-option">
                prime
            </span>
            </div>
            <Link to={state?.user ? '/checkout' : '/login'} style={{textDecoration:'none'}}>
            <div className="cart__icon">
                <span>
                    <ShoppingCartIcon style={{ fontSize: 30, marginLeft: -6, marginTop: 3}} />
                </span>

                <span style={{ fontSize: "25px", fontWeight: "bold", marginTop: "0px", marginLeft: "3px"}}>
                   {state.user ? state?.basket?.length : ''} 
                </span>

            </div>
            </Link>
        </div>

        </div>

    )

}

export default Header;


