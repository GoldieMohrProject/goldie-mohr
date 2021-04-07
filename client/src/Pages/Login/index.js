import {useState, useRef} from 'react';
import './style.css'
import {Redirect} from "react-router-dom"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Navbar from "../../Components/Navbar"
import emailjs from 'emailjs-com';

function Login(){


  
const sendEmail= async(e)=> {
  // const tokenn = '123'
  console.log('token',token)
  e.preventDefault();
  setAnimated(true)
  emailjs.sendForm('service_wx1sxp3', 'template_yvrz2qg', e.target, 'user_izFYZTC0McdbOeazrlOp2')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    // console.log('[e.target]',e.target.email.value)
    const fetchOptions = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'email': e.target.email.value,
          'token': e.target.token.value

      },
      body: JSON.stringify()
  }
  let result = await fetch('/api/users/sendToken', fetchOptions).then(res => res.json())
}
    const [alert, setAlert] =useState({display: 'none'})
    const [email, setEmail] = useState('');
    const [animated, setAnimated] = useState(false)
    const [password, setPassword] = useState('');
    const [authOk, setAuthOk] = useState(false);
    const [show, setShow] = useState(false);
    const [token,setToken] = useState(Math.floor(Math.random() * 10000000000000))
    const inputEmail = useRef()
    const inputPassword = useRef()
   const handleClose = () =>{ setShow(false);setAnimated(false)}
   const handleShow = () => {setShow(true); setAnimated(false)}
    


     
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



    return (
        <>
        { authOk ? <Redirect to='/profile' /> : '' }
         <Navbar handleModal={handleShow} />
          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={sendEmail}>
                <div class="mb-3">
                  <label for="exampleInputEmail1"  className="form-label" style={{ color: "black" }}>Email address</label>
                  <input ref={inputEmail} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label" style={{ color: "black" }}>Password</label>
                  <input ref={inputPassword} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3" style={{display:'none'}}>
                  <label for="exampleInputPassword1" class="form-label" style={{ color: "black" }}>Password</label>
                  <input name="token" type="text" value= {token} className="form-control" id="exampleInputPassword1" />
                </div>
                <div class={`alert  ${animated ?'alert-success animate displayed':'notDisplayed '} `} idrole="alert">
                  You recived reset password email succesfully.
                </div>
                <button type="submit" name="submit" value="Send" className="btn btn-default" onclick={sendEmail}>Reset Password</button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} >
                Cancel
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