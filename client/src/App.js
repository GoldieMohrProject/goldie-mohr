import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About"
import React, { useState } from 'react'
import Wrapper from './Components/Wrapper'
import Contact from "./Pages/Contact"
import Footer from './Components/Footer'
import Service from "./Pages/Services"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home/index"
import Career from "./Pages/Career"
import Product from "./Pages/Products/index"
import Training from "./Pages/Training/index"
import {Modal} from "react-bootstrap"
import {Button} from "react-bootstrap"

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <Router>
      <div>
        <Navbar handleModal={handleShow}/>
        <Wrapper>
        <Modal show={show} onHide={handleClose} style={{ zIndex: 0 }}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        </form>
                </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} >
                            Cancel
          </Button>
                        <Button variant="primary" onClick={handleClose} >
                            Login
          </Button>
 
                    </Modal.Footer>
                    <p style={{ textAlign: "center" }}>Haven't registered yet? Click <a href="./Register">here</a> to register</p>
            </Modal>
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Product" component={Product}/>
        <Route exact path="/Career" component={Career} />
        <Route exact path="/Training" component={Training} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  

  );
}

export default App;
