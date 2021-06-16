import React from 'react';

import CountryData from './Components/CountryData';
import Home from './Components/Home';
import CountryDetail from './Components/CountryDetail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const App = () => {

   


    return (
        
        
        
        
        
        
        
        <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/country">country</Link>
          </li>
          
          
        </ul>

        <hr />
        
       
        
            <Switch>
            
            <Route  exact path ="/">
                <Home />
              </Route>
          <Route path="/country">
            <CountryData />
          </Route>
          <Route path="/countryDetail/:name">
              <CountryDetail />
              
          </Route>
            </Switch>
            </div>
        </Router>
        
        

        
        
           
        
    );
};

export default App;