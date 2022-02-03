import React, { useEffect, useState } from 'react';
import './Banner.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from './axios';
import requests from './Request';
import { containerClasses } from '@mui/material';

function Banner() {
    
    const [movie, setMovie]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length -1)
                ]
            )
            return request;
        }

        fetchData();
    },[]);

    console.log(movie);


    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1)+'...' : string;
    }

  return (
  <div className="banner">
      <header
      className="banner"
      style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        //  objectFit:"contain",
        //  width:"100%"
          
      }}
      >
          <div className="banner_contents">
              <h1 className="banner_title">{movie?.original_name || movie?.name || movie?.title}</h1>
              <div className="banner_buttons">
                  <button className="banner_button"><PlayArrowIcon /><span className="hi">Play</span> </button>
                  
                  <button className="banner_button more"><InfoOutlinedIcon className="mate" /><span className="hi">More Info</span></button>
                 </div>
              

                
              <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
              
          </div>

          <div className="banner--fadebottom">

          </div>
      </header>

  </div>
  );
}

export default Banner;
