import React from 'react'
import './style.css'
import RegisterForm from '../../Components/RegisterForm'



class Register extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        selectedFile: null,

        something : false
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


    handleSubmit = async (event) => {
        event.preventDefault()
        console.log(event)
        const userInfo = {
            first_name: this.state.firstname.trim(),
            last_name: this.state.lastname.trim(),
            email: this.state.email.trim(),
            phone_number: this.state.phone.trim(),
            password: this.state.password.trim(),
            picture: this.state.selectedFile,

        }

        const fetchOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // looks for a session entry in localStorage, and if so pass it
                // 'Session': localStorage.session || ''
            },
            body: JSON.stringify(userInfo)
        }
     
        console.log(this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.password, this.state.selectedFile)
        let x = await fetch('/api/users/register', fetchOptions).then(res => res.json())
        return    this.setState({something:true})

        // const { status, message } = await fetchJSON('/api/users/register', 'post', userInfo)
        // const name = event.target.name;
        // const value = event.target.value;
        // this.setState({
        //     [name]: value
        // });
        // console.log(this.state.firstname, this.state.lastname, this.state.email, this.state.phone, this.state.password, this.state.selectedFile)
    };

    render() {
        return (
            <>

                <div style={{ marginTop: "55px" }}>
                    <div className="container">
                        <div style={{ marginLeft: "100px", marginRight: "100px" }}>
                            <h3 style={{ color: "black", marginBottom: "30px" }}>Add new employee</h3>

                            <RegisterForm firstname={this.state.firstname}
                                something = {this.state.something}
                                lastname={this.state.lastname} email={this.state.email}
                                phone={this.state.phone} password={this.state.password}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                onFileChange={this.onFileChange} />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Register