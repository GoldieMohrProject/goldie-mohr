import React from 'react'

function RegisterForm(props) {
    return (
        <>
            <form className="">
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="firstNameInput" className="form-label">First Name</label>
                    <input onChange={props.handleChange} name="firstname" style={{ borderRadius: "0px" }} value={props.firstname} type="text" className="form-control" id="firstNameInput" placeholder="Enter first name" required />
                </div>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="secondNameInput" className="form-label">Last Name</label>
                    <input onChange={props.handleChange} name="lastname" style={{ borderRadius: "0px" }} value={props.lastname} type="text" className="form-control" id="secondNameInput" placeholder="Enter last name" required />
                </div>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="exampleFormControlInput1" className="form-label">Email Address</label>
                    <input onChange={props.handleChange} name="email" style={{ borderRadius: "0px" }} value={props.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                </div>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="passwordInput" className="form-label">Password</label>
                    <input onChange={props.handleChange} name="password" style={{ borderRadius: "0px" }} value={props.password} type="password" className="form-control" id="passwordInput" placeholder="Enter password" required />
                </div>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="phoneInput" className="form-label">Phone Number</label>
                    <input onChange={props.handleChange} name="phone" style={{ borderRadius: "0px" }} value={props.phone} onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="text" maxLength="10" className="form-control" id="phoneInput" placeholder="Enter phone number" required />
                </div>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="formFile" className="form-label">Upload Picture</label>
                    <input className="form-control" type="file" style={{ borderRadius: "0px" }} id="formFile" onChange={props.onFileChange} />
                </div>
                <div className="mb-3">
                    <button style={{ backgroundColor: "#3178c6", borderRadius: "0px" }} type="submit" class="btn btn-primary" onClick={props.handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm