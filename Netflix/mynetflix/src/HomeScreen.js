import React from 'react';
import Navbar from './Navbar';
import './HomeScreen.css';
import Banner from './Banner';
import requests from './Request';
import Row from './Row';

function HomeScreen() {
  return (
  
  <div className="homescreen">
    <Navbar />
    <Banner />

    <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
    <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
    <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
    <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
    <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
    <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

  </div>
    
    );
}

export default HomeScreen;
