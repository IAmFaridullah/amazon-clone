import React, {useState} from 'react';
import './login.css';
import {useHistory} from 'react-router-dom';
import {auth} from '../authentication/firebase';
import {useStateValue} from '../contexts/context';

const Login = (prop) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [{error}, dispatch] = useStateValue();

    const signIn = () => (
       auth.signInWithEmailAndPassword(email,password)
       .then(user => {
           if(user){
               dispatch({
                   type : 'ADD_USER',
                   user : user
               });
               dispatch({
                type : 'REMOVE_ERROR',
            })
               history.push("/");
           };
       }) 
       .catch(error => (dispatch({
        type : 'SAVE_ERROR',
        error : error.message
    }),
    console.log(error.message)))
    )

    const signUp = () => (
        history.push('/signup'),
        dispatch({
            type : 'REMOVE_ERROR',
        })
    )


    return (

            <div className='login'>
                
                <img className='amazon__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className='amazon__logo' alt="Amazon-logo"/>
                <div className='login__container'>

                    <p style={{color : 'red', fontSize : '20px'}}>{error}</p>

                    <h1>Sign-in</h1>
                    
                    <h5>Email</h5>
                    <input type="text" onChange={(e) => ( setEmail(e.target.value))} />

                    <h5>Password</h5>
                    <input type="password" onChange={(e) => ( setPassword(e.target.value))} />

                    <button onClick={signIn} className="login__button" type='submit'>Login</button>

                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    <button onClick={signUp} className="register__button">Create your amazon account</button>
                    
                </div>
            </div>

    )

}

export default Login;