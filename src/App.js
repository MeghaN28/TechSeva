import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Error from './components/Error';
//import Navigation from './components/Navigation';
import Navigation from './components/BootstrapNavbar';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
         
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;