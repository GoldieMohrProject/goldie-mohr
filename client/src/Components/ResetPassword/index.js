import React,{useState} from 'react'
import {useRef} from 'react';
import { Redirect } from 'react-router';

function ResetPassword(props) {
    let [linkk , setLink]= useState(false)

    const inputPassword = useRef()
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('key');
    console.log('myParam',myParam)
    async function resetPassword(event) {

        event.preventDefault()
        const usePassword = {
            password:inputPassword.current.value,
            // password: inputPassword.current.value,

        }
        const fetchOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'token': myParam

            },
            body: JSON.stringify(usePassword)
        }

        console.log('IM in reset password function')
        console.log('tokennnnnnnnnnn:', myParam)
        let result = await fetch('/api/users/resetPassword', fetchOptions).then(res => res.json())
        setLink(true)
    }

    return (
        <>
            <form>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="resetPassword" className="form-label">Enter your new password</label>
                    <input name="password" style={{ borderRadius: "0px" }} type="password" className="form-control" id="resetPassword" placeholder="Enter new password" required />
                </div>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="confirmPassword" className="form-label">Re-enter your new password</label>
                    <input  ref={inputPassword} name="confirmPassword" style={{ borderRadius: "0px" }} type="password" className="form-control" id="confirmPassword" placeholder="Re-enter new password" required />
                </div>
                {/* <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                <label style={{ color: "black", marginLeft: "12px" }} for="formFile" className="form-label">Upload Picture</label>
                <input className="form-control" type="file" style={{ borderRadius: "0px" }} id="formFile" onChange={props.onFileChange} />
            </div> */}
                <div className="mb-3">
                    <button onClick={resetPassword} style={{ backgroundColor: "#3178c6", borderRadius: "0px" }} type="submit" class="btn btn-primary">Save</button>
                </div>
            </form> 
            {linkk === true ? <Redirect to="/" />: ''}

        </>
    )
}

export default ResetPassword