import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About"
import React, { useState } from 'react'
import Wrapper from './Components/Wrapper'
import Contact from "./Pages/Contact"
import Footer from './Components/Footer'
import Service from "./Pages/Services"
import Home from "./Pages/Home/index"
import Career from "./Pages/Career"
import Register from "./Pages/Register"
import Product from "./Pages/Products/index"
import Training from "./Pages/Training/index"
import Login from "./Pages/Login"
import Reset from "./Pages/Reset"
import Employees from "./Pages/Employees"

import CardProfile from "./Pages/Profile/index"
function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Login />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Career" component={Career} />
          <Route exact path="/Training" component={Training} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Profile" component={CardProfile} />
          <Route exact path="/Reset" component={Reset} />
          <Route exact path="/Employees" component={Employees} />


        </Wrapper>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
