import emailjs from 'emailjs-com';
import React from 'react';
import './style.css'

class  Contact  extends React.Component  {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            lastName: '',
            email:'',
            subject:'',
            message:'' };
      }

      nameHandler = (event) => {
        this.setState({username: event.target.value});
      }

      lastNameHandler =(event) =>{
        this.setState({lastName: event.target.value});
      }

      emailHandler =(event) =>{
        this.setState({email: event.target.value});
      }
      subjectHandler =(event) =>{
        this.setState({subject: event.target.value});
      }
     messageHandler =(event) =>{
        this.setState({message: event.target.value});
      }
       
      sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_59tkng9', 'template_3i27x59', e.target, 'user_znYxcuxXFuqUmoJFIoGRN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      }
    



      render() {
    return (
        <>
            {/* Banner area */}
            <section className="banner_area" data-stellar-background-ratio="0.5">
                <h2>Contact Us</h2>

            </section>
            {/* End Banner area */}



            {/* All contact Info */}
            <section className="all_contact_info">
                <div className="container">
                    <div className="row contact_row">
                        <div className="col-sm-6 contact_info">
                            <h2>Contact Info</h2>
                            <p>
                                If you have any questions about any of our products and services, feel free to reach out to us! We woud love to hear from you!
                           </p>
                            <div className="location">
                                <div className="location_laft">
                                    <a  >location</a>
                                    <a >phone</a>
                                    <a > toll free</a>
                                    <a >fax</a>
                                    <a >email</a>
                                    <a >Mail </a>
                                </div>
                                <div className="address">
                                    <a >3862 Moodie Drive, Nepean, Ontario </a>
                                    <a >+1 613 838 50 42</a>
                                    <a> +1 800 267 55 13</a>
                                    <a > +1 613 838 58 08</a>
                                    <a >info@goldiemohrltd.ca</a>
                                    <a > PO Box 34009,Ottawa, Ontario, K2J 5B1</a>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 contact_info send_message">
                            <h2>Send Us a Message</h2>
                            <form  method="post" className="form-inline contact_box"  onSubmit={this.sendEmail}>
                                <input type="text" onChange={this.nameHandler} className="form-control input_box" name="name" placeholder="First Name *" required/>
                                <input type="text" className="form-control input_box" onChange={this.lastNameHandler} name="lastName" placeholder="Last Name *" required/>
                                <input type="email" className="form-control input_box" name="email"  onChange={this.emailHandler}placeholder="Your Email *" required/>
                                <input type="text" className="form-control input_box" name="subject"    onChange={this.subjectHandler} placeholder="Subject" required/>
                                <textarea className="form-control input_box" placeholder="message"  name="message" onChange={this.messageHandler} defaultValue={""} required/>
                                <button type="submit" name="submit" value="Send" className="btn btn-default" id="sendbtn" onclick={this.sendEmail}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End All contact Info */}

            {/* Map */}
            <div className="contact_map">
                <iframe src="https://www.google.ca/maps?f=q&source=s_q&hl=en&geocode=&q=3862+Moodie+Drive,+Ottawa,+ON&aq=0&oq=3862+Moodie+Drive&sll=45.250157,-75.800257&sspn=0.592656,1.295013&ie=UTF8&hq=&hnear=3862+Moodie+Dr,+Ottawa,+Ottawa+Division,+Ontario+K0A+2Z0&t=m&z=14&ll=45.217851,-75.772802&output=embed" />
            </div>
            {/* End Map */}



        </>

    );
}
}
export default Contact;
