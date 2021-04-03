import React from 'react';
import './style.css'

function Login() {
    return (
        <div>
            <div className="loginarea">
            <h3>Login</h3>
            <br></br>
            <form method='POST' action='/api/users/login'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input name ='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="loginbtn">Login</button>
            </form>
            </div>
        </div>
    )
}

export default Login;