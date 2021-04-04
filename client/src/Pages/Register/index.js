import React from 'react'
import './style.css'
import RegisterForm from '../../Components/RegisterForm'
import fetchJSON from "../../Utils/API.js"


class Register extends React.Component {
    constructor (props) {
        super(props)
    this.state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        selectedFile: null
        // password: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.api = this.api.bind(this)
    this.onFileChange=this.onFileChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}

    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "phone" && value <= 10) {
            this.setState({
                [name]: value
            });
        }
        this.setState({
            [name]: value
        });
    };


    handleSubmit = event => {
        // const name = event.target.name;
        // const value = event.target.value;
        // this.setState({
        //     [name]: value
        // });
        console.log(this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.password, this.state.selectedFile)
        this.api()
     
    };

    api = async function data(){

        const { message } = await fetch('/api/users/register').then(r => r.json())
  
        
        console.log("api function called")

        return message
        
    }
 

    render() {
        return (
            <>
                <div id="registerImage">
                    <h1 id="registerTitle">REGISTER</h1>
                </div>
                <div style={{ marginTop: "55px" }}>
                    <div className="container">
                        <h3 style={{ color: "black", marginBottom: "30px" }}>Adding new employee</h3>

                        <RegisterForm firstname={this.state.firstname}
                            lastname={this.state.lastname} email={this.state.email}
                            phone={this.state.phone} password={this.state.password}
                            handleSubmit={this.api}
                            handleChange={this.handleChange}
                            onFileChange={this.onFileChange} />
                    </div>
                </div>

            </>
        )
    }
}

export default Register;