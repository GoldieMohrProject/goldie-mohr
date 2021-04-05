import React from 'react'
import { NavLink } from "react-router-dom"
import './style.css'

function Navbar(props) {
  // async function loadUserSession(){
  //   const { status, userData, message }= await fetch( `/api/users/session` ).then( res=>res.json())
  //   console.log( `[NavBar] attempted to reload session, result(${status}) message(${message})` )
  //   if( !status ){
  //     // clear any session
  //     delete localStorage.session
  //     return
  //   }
  //   return userData
 
  // }

  async function logoutUser(){
    const fetchOptions = {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Session': localStorage.session || ''

      },
      // body : JSON.stringify( userInfo )
  }

    const result = await fetch( '/api/users/logout',fetchOptions).then( res=>res.json())
    console.log ('resultttttt',result.authOK)
    if(result.authOK === false){
      delete localStorage.session
      window.location.href = '/'
      // return <><Redirect to='/home' /></>
    }
    // (result.authOk = false) ?  <Redirect to='/home' /> :  <Redirect to='/register'/>
    // <h1>Please wait, logging out...</h1>
  }
  return ( 
    <>
  <section className="top_header_area">
    <div className="container">
      <ul className="nav navbar-expand-lg navbar-light top_nav">
        <li><a href="#"><i className="fa fa-phone" />+1 (613) 838 5042</a></li>
        <li><a href="#"><i className="fa fa-envelope" />info@goldiemohrltd.ca</a></li>
        <li><a href="#"><i className="fa fa-clock" />Mon - Sat 07:00 - 18:00</a></li>
        <li><a target="_blank" href="https://www.facebook.com/GoldieMohr"><i class="fab fa-facebook-f"></i></a></li>
        <li><a target="_blank" href="https://twitter.com/goldiemohrltd"><i class="fab fa-twitter"></i></a></li>
        <li className="ms-auto" id="faUser"><a href="#"></a></li>
        {localStorage.session &&  <nav class="navbar navbar-expand-lg navbar-light bg-light">{localStorage.name}</nav>}
        <div class="dropdown">
        <button class="dropbtn" ><NavLink to="./Login"><i class="fas fa-user fa-lg userColor"></i></NavLink></button>
        <div class="dropdown-content">
          {!localStorage.session &&
          <>
          <a onClick={props.handleModal}>Login</a>
          <NavLink to="/register" className="navbar-brand">Register</NavLink> </>         }
          {localStorage.session && <>
            <NavLink to="/Training" className="navbar-brand">Training</NavLink>
            <NavLink to="/Profile" className="navbar-brand">Profile</NavLink>
            <a onClick={logoutUser}>Logout</a>
            </>
          }
          {/* // <a href="./Training"></a>
          // <a href="#">Profile</a> 
          // <a onClick={logoutUser}>Logout</a> */}

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
          <NavLink className="nav-link" aria-current="page" to="/" onClick={() => {window.location.href="/"}} >Home</NavLink>
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
          <NavLink className="nav-link "  to="./Contact">Contact us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
)
}

export default Navbar