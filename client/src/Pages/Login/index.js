import {useState, useRef} from 'react';
import './style.css'
import {Redirect} from "react-router-dom"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Navbar from "../../Components/Navbar"

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authOk, setAuthOk] = useState(false);
    const [show, setShow] = useState(false);
    const inputEmail = useRef()
    const inputPassword = useRef()
    // const inputRememberMe = useRef()
    // state = {
    //     email: "",
    //     password: "",
    //     authOk: false,
    //     show: false,
    //   }

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
    
//     handleChange = event => {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         });
//     };

     
function userLoginSave({ status, session, userData, message }){ 
    // login ok, saving session & saving userData
    console.log( `[userLoginSave] data:`, userData )
    if( !status ){
       // clear any session
       localStorage.session = ''
    //    dispatch({ type: 'ALERT_MESSAGE', message })
       return
    }    
    setAuthOk(true)
    localStorage.session = session
    localStorage.name = userData.first_name
    localStorage.email = userData.email
    localStorage.isAdmin= userData.isAdmin
    console.log('trying to see the session',session)
    handleClose()
    // dispatch({ type: 'USER_LOGIN', data: userData })
    // window.location.href = '/'
 }


     async function userLogin( event ){
        event.preventDefault()
        const userInfo = {
            email:inputEmail.current.value,
            password: inputPassword.current.value,

        }
      
            const fetchOptions = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Session': localStorage.session || ''

                },
                body : JSON.stringify( userInfo )
            }
           
        let { status, session, userData, message } = await fetch( '/api/users/login',fetchOptions).then( res=>res.json())
        userLoginSave({ status, session, userData, message })
};
// render(){
    return (
        <>
          {/* { this.state.authOk ? <Redirect to='/profile' /> : '' }
        <div>
            <div className="loginarea">
            <h3>Login</h3>
            <br></br>
            <form method='POST' action='/api/users/login'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={this.handleChange} name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input name ='password' type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="loginbtn" onClick={this.handleSubmit}>Login</button>
            </form>
            <p>Haven't registered yet? Click <a href="./Register">here</a> to register</p>
            </div>
        </div> */}
        { authOk ? <Redirect to='/profile' /> : '' }
         <Navbar handleModal={handleShow} />
          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label" style={{ color: "black" }}>Email address</label>
                  <input ref={inputEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label" style={{ color: "black" }}>Password</label>
                  <input  ref={inputPassword} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} >
                Cancssssel
          </Button>
              <Button variant="primary"  onClick={userLogin} >
                Login
          </Button>

            </Modal.Footer>
            <p style={{ textAlign: "center" }}>Haven't registered yet? Click <a href="./Register">here</a> to register</p>
          </Modal>
        </>
    )}
// }

export default Login;