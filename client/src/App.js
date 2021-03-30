import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About/index"
import React from 'react'
import Wrapper from './Components/Wrapper'
import Contact from "./Pages/Contact/index"
import Footer from './Components/Footer'
import Service from "./Pages/Services/index"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home/index"


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
        <Route exact path="/Career" component={Home} />
        <Route exact path="/Projects" component={Home} />
        </Wrapper>
      <Footer />
    </div>
  </Router>

  );
}

export default App;
