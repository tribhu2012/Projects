import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';


function App() {

  const user = null;

  return (
    <div className="App">
     
      <Router>
        {!user? (
            <Login />
        ):(

          <Switch>
  
          <Route path="/">
            <HomeScreen />
          </Route>

        </Switch>

        )}

         

        
      </Router>

      </div>
  );
}

export default App;
