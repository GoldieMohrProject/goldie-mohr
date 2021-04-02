import React from 'react'

function RegisterForm(props) {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label style={{ color: "black" }} for="firstNameInput" className="form-label">First Name</label>
                    <input onChange={props.handleChange} name="firstname" value={props.firstname} type="text" className="form-control" id="firstNameInput" placeholder="Enter first name" required />
                </div>
                <div className="mb-3">
                    <label style={{ color: "black" }} for="secondNameInput" className="form-label">Last Name</label>
                    <input onChange={props.handleChange} name="lastname" value={props.lastname} type="text" className="form-control" id="secondNameInput" placeholder="Enter last name" required />
                </div>
                <div className="mb-3">
                    <label style={{ color: "black" }} for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={props.handleChange} name="email" value={props.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                    <label style={{ color: "black" }} for="passwordInput" className="form-label">Password</label>
                    <input onChange={props.handleChange} name="password" value={props.password} type="password" className="form-control" id="passwordInput" placeholder="Enter password" required />
                </div>
                <div className="mb-3">
                    <label style={{ color: "black" }} for="phoneInput" className="form-label">Phone number</label>
                    <input onChange={props.handleChange} name="phone" value={props.phone} onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" maxLength="10" className="form-control" id="phoneInput" placeholder="Enter phone number" required />
                </div>
                <div className="mb-3">
                    <label style={{ color: "black" }} for="formFile" className="form-label">Upload member image</label>
                    <input className="form-control" type="file" id="formFile" onChange={props.onFileChange} />
                </div>
                <div className="mb-3">
                    <button style={{ backgroundColor: "#3178c6" }} type="button" class="btn btn-primary" onClick={props.handleSubmit}>Save</button>

                </div>
            </form>
        </>
    )
}

export default RegisterForm