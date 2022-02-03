import { Checkbox } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from './firebase';
import './SignInPage.css'
import { Link } from 'react-router-dom';

function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history= useHistory();

    const register = (e) =>{
            e.preventDefault();

            auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth)=>{
                       history.push('/');
                })
                .catch((error)=>{
                    alert(error.message)
                })
    };


    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((authUser)=>{
                console.log(auth);
            })
            .catch((error)=>{
                alert(error.message)
            })
    }

  return (
      <div className="signin">
        
        <form>
        <h1>Sign In</h1>
        <input placeholder="Email or phone number" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
       <Link to="/">
        <button onClick={signIn} type="submit">Sign In</button>  
       </Link>
        <div className="check">
            <input type="checkbox" />
                <div className="myspan">
                <span className="one">Remember me</span>
                <span>Need help?</span>
                </div>
        </div>  

        <div className="new">
            <span className="a">New to Netflix? </span><span onClick={register} className="b"> Sign up now</span>
        </div>
        
        <div className="learn">
         <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span><a href="#">Learn more.</a> 
        </div>

        </form>
    </div>

 );
}

export default SignInPage;
