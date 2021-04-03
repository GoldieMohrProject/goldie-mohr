import React, { useState } from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
      </Button> */}

            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        </form>
                </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={handleClose} dialogClassName="closebtn">
                            Cancel
          </Button>
                        <Button  onClick={handleClose} dialogClassName="loginbtn">
                            Login
          </Button>
                    </Modal.Footer>
            </Modal>
        </>
    );

}
// render(<Login />);


export default Login;