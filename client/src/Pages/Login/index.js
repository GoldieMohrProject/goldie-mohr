import React from 'react';
import './style.css'
import {Redirect} from "react-router-dom"

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        authOk: false
      }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

     
    userLoginSave({ status, session, userData, message }){ 
    // login ok, saving session & saving userData
    console.log( `[userLoginSave] data:`, userData )
    if( !status ){
       // clear any session
       localStorage.session = ''
    //    dispatch({ type: 'ALERT_MESSAGE', message })
       return
    }    
    this.setState({authOk:true})
    localStorage.session = session
    localStorage.name = userData.first_name
    localStorage.email = userData.email
    console.log('trying to see the session',session)
    // dispatch({ type: 'USER_LOGIN', data: userData })
    // window.location.href = '/'
 }


     handleSubmit = async (event) => {
        event.preventDefault()
        const userInfo = {
            email: this.state.email.trim(),
            password: this.state.password.trim()

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
        this.userLoginSave({ status, session, userData, message })
};
render(){
    return (
        <>
          { this.state.authOk ? <Redirect to='/profile' /> : '' }
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
        </div>
        </>
    )}
}

export default Login;