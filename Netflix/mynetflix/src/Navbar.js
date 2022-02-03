import React from 'react';
import './Navbar.css';
import {useState, useEffect} from 'react';

function Navbar() {

    const [show, handleShow] =useState(false);

    const transitionNavbar = () => {
        if(window.scrollY>100)
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);

        return () => {
            window.removeEventListener("scroll", transitionNavbar);
        }
    }, [])

  return (
<div className={`navbar ${show && 'navbar_black'}`}> 
        {/* if show is true (when scorlled), use navbar_black  */}
    <div className='nav_contents'>
        <img className="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix_logo" ></img>
  
        <img className="avatar" src="data:image/jpeg;base64,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" />
  
        <div className='opt'>
            <div className='opt1'>
                Home
            </div>

            <div className='opt1'>
                TV Shows
            </div>

            <div className='opt1'>
                Movies
            </div>

            <div className='opt1'>
                Latest
            </div>

            <div className='opt1'>
                My List
            </div>
    
            </div>


    </div>




  </div>
  
  );
}

export default Navbar;
