import React, {useState} from 'react';
import './signUp.css';
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../contexts/context';
import {auth} from '../authentication/firebase';

const SignUp = (prop) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [state, dispatch] = useStateValue();

    const signIn = () => (
        history.push('/login'),
        dispatch({
            type : 'REMOVE_ERROR',
        })
    )

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(user => {
            if(user){
                history.push("/login");
                dispatch({
                    type : 'REMOVE_ERROR',
                })
            }
        })
        .catch(error => dispatch({
            type : 'SAVE_ERROR',
            error : error.message
        }));
    }


    return (

        <div className='signup'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className='amazon__logo' alt="Amazon-logo"/>
                <div className='signup__container'>
                    <p style={{color : 'red', fontSize : '20px'}}>{state.error}</p>
                    <h1>Sign-Up</h1>
                    
                    <h5>Email</h5>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" onChange={(e) =>  setPassword(e.target.value)} />

                    <button onClick={signUp} className="signup__button" type='submit'>Register</button>

                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    
                    <button onClick={signIn} className="signin__button">Already have account? Login here</button>
                    
                </div>
            </div>

    )

}

export default SignUp;