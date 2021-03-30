import React from 'react'

import './style.css'


function Navbar() {
  
  return ( 
    <>
  <section className="top_header_area">
    <div className="container">
      <ul className="nav navbar-expand-lg navbar-light top_nav">
        <li><a href="#"><i className="fa fa-phone" />+1 (613) 838 5042</a></li>
        <li><a href="#"><i className="fa fa-envelope" />info@goldiemohrltd.ca</a></li>
        <li><a href="#"><i className="fa fa-clock" />Mon - Sat 12:00 - 20:00</a></li>
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
  </section>
  <nav className="navbar navbar-expand-lg navbar-light header_aera" id="main_navbar">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="images/header-logo.png" ></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#min_navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="min_navbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link contactUs"  href="#">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar