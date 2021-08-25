import React from 'react';
import IMAGES from '../../images/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Home from '../../containers/Home/Home';
  import AboutUs from '../../containers/About/About';
  import ContactUs from '../../containers/Contact/Contact';
  import Login from '../../containers/Login/Login';
  import Profile from '../../containers/Profile/Profile';
  import Register from '../../containers/Register/Register';
class Header extends React.Component{

    render(){
        return(
         
            <div>
                   
                <div className="row">
                    <div className="col-md-24">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <img src={IMAGES.logoTechSeva} style={{width:100, marginTop: -7}} />
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/profile">Profile</Nav.Link>
                                    </Nav>
                                    <Form inline>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/profile">
                                <Profile />
                                </Route>
                                <Route path="/register">
                                <Register />
                                </Route>
                            </Switch>
                        </Router>
                   
                    </div>
                </div>
            </div>
        )  
    }
}

export default Header;