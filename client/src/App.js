import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About"
import React from 'react'
import Wrapper from './Components/Wrapper'
import Contact from "./Pages/Contact"
import Footer from './Components/Footer'
import Service from "./Pages/Services"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home/index"
import Login from "./Pages/Login/index"
import Career from "./Pages/Career"
import Register from "./Pages/Register"
import Product from "./Pages/Products/index"
import Training from "./Pages/Training/index"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Career" component={Career} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Training" component={Training} />
          <Route exact path="/Register" component={Register} />
        </Wrapper>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
