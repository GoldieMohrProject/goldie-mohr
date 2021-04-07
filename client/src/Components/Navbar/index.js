import React from 'react'
import { NavLink } from "react-router-dom"
import './style.css'

function Navbar(props) {

  async function logoutUser() {
    const fetchOptions = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Session': localStorage.session || '',
        'email': localStorage.email || '',

      },
      // body : JSON.stringify( userInfo )
    }

    const result = await fetch('/api/users/logout', fetchOptions).then(res => res.json())
    console.log('resultttttt', result.authOK)
    if (result.authOK === false) {
      delete localStorage.session
      delete localStorage.email
      delete localStorage.name
      delete localStorage.isAdmin

      window.location.href = '/'
    }
  
  }
  return (
    <>
      <section className="top_header_area">
        <div className="container">
          <ul className="nav navbar-expand-lg navbar-light top_nav">
            <li><a href="#"><i className="fa fa-phone" />+1 (613) 838 5042</a></li>
            <li><a href="mailto:info@goldiemohrltd.ca" target="_blank" rel="noreferrer"><i className="fa fa-envelope" />info@goldiemohrltd.ca</a></li>
            <li><a href="#"><i className="fa fa-clock" />Mon - Fri 07:00 - 18:00</a></li>
            <li><a target="_blank" href="https://www.facebook.com/GoldieMohr"><i class="fab fa-facebook-f"></i></a></li>
            <li><a target="_blank" href="https://twitter.com/goldiemohrltd"><i class="fab fa-twitter"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/company/goldiemohrltd/"><i class="fab fa-linkedin-in"></i></a></li>
            <li className="ms-auto" id="faUser"><a href="#"></a></li>
            {localStorage.session && <nav class="navbar navbar-expand-lg navbar-light bg-light">{localStorage.name}</nav>}
            <div class="dropdown">
              <button class="dropbtn" ><i class="fas fa-user fa-lg userColor"></i></button>
              <div class="dropdown-content">
                {!localStorage.session &&
                  <>
                    <a onClick={props.handleModal}>Login</a> </>}
                {localStorage.session && <>
                  <NavLink to="/training" className="navbar-brand">Training</NavLink>
                  <NavLink to="/profile" className="navbar-brand">Profile</NavLink>
                  {localStorage.isAdmin == 1 && <NavLink to="/Employees" className="navbar-brand ">Employees</NavLink>}
                  {localStorage.isAdmin == 1 && <NavLink to="/Register" className="navbar-brand ">Register</NavLink>}
                  <a onClick={logoutUser}>Logout</a>
                </>
                }
           

              </div>
            </div>
          </ul>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg navbar-light header_aera stroke" id="main_navbar">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="images/header-logo.png" ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#min_navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="min_navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" onClick={() => { window.location.href = "/" }} >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./Service">Services & Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./Product">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./About">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./Career">Careers</NavLink>
              </li>
              <li className="nav-item contactUs">
                <NavLink className="nav-link " to="./Contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar