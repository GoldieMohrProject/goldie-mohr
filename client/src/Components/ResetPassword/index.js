import React from 'react'

function ResetPassword() {
    return (
        <>
            <form>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="resetPassword" className="form-label">Enter your new password</label>
                    <input name="password" style={{ borderRadius: "0px" }} type="password" className="form-control" id="resetPassword" placeholder="Enter new password" required />
                </div>
                <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                    <label style={{ color: "black", marginLeft: "12px" }} for="confirmPassword" className="form-label">Re-enter your new password</label>
                    <input name="confirmPassword" style={{ borderRadius: "0px" }} type="password" className="form-control" id="confirmPassword" placeholder="Re-enter new password" required />
                </div>
                {/* <div className="mb-3" style={{ backgroundColor: "#F2F2F2" }}>
                <label style={{ color: "black", marginLeft: "12px" }} for="formFile" className="form-label">Upload Picture</label>
                <input className="form-control" type="file" style={{ borderRadius: "0px" }} id="formFile" onChange={props.onFileChange} />
            </div> */}
                <div className="mb-3">
                    <button style={{ backgroundColor: "#3178c6", borderRadius: "0px" }} type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </>
    )
}

export default ResetPassword