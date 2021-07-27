import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Error from './components/Error';
//import Navigation from './components/Navigation';
import Header from './components/Header/Header'
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
         <Header/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;