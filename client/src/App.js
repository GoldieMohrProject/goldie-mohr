
import About from "./Pages/About"
import React from 'react'
import Wrapper from './Components/Wrapper'
import Contact from "./Pages/Contact"
import Footer from './Components/Footer'
import Service from "./Pages/Services"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"


function App() {
  return (

    <Wrapper>
     < Navbar/>
      {/* <h1>GOLDIE MOHR</h1> */}
      <Home/>
      <Footer />
    </Wrapper>
  );
}

export default App;
