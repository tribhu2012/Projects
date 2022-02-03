import React from 'react';
import './Login.css' 
import {useState} from 'react';
import SignInPage from './SignInPage';

function Login() {
    const [signIn, setSignIn] = useState(false);
    console.log(signIn);
    return (

  <div className="login">
      <div className="login_bg">
          <img className="login_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />

      
      
      <button className="login_button" onClick={()=>setSignIn(true)}>Sign In</button>
      
        <div className="login_gradient"></div>
       </div>
{/* 
        //when signIn clicked, go to signInPage */}
        <div className="login_body">
       
        {signIn ? (
           
           <SignInPage />
        
            ):(
                <>
           <h1>Unlimited films, TV programmes and more.</h1>
           <h2>Watch anywhere. Cancel at any time.</h2>
           <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="input_button">
                <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={()=>setSignIn(true)}>GET STARTED <span>&gt;</span> </button>
                </form>
            </div>
                 </>

        )}
       
       </div>

  </div>
  
  );
}

export default Login;

