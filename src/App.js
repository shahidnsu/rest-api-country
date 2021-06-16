import React from 'react';

import CountryData from './Components/CountryData';
import Home from './Components/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const App = () => {

   


    return (
        
        
        
        
        
        
        
        <Router>
            <Switch>
            <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/country">
            <CountryData />
          </Route>
            </Switch>
        </Router>
        
        

        
        
           
        
    );
};

export default App;