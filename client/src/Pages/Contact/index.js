import emailjs from 'emailjs-com';
import React from 'react';
import './style.css'

class Contact extends React.Component {

    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_59tkng9', 'template_3i27x59', e.target, 'user_znYxcuxXFuqUmoJFIoGRN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
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
                                <form method="post" className="form-inline contact_box" onSubmit={this.sendEmail}>
                                    <label style={{ color: "black", marginBottom: "5px" }} for="name" className="form-label">First Name</label>
                                    <input type="text" className="form-control input_box" name="name" placeholder="First Name *" required />
                                    <label style={{ color: "black", marginBottom: "5px" }} for="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control input_box" name="lastName" placeholder="Last Name *" required />
                                    <label style={{ color: "black", marginBottom: "5px" }} for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control input_box" name="email" placeholder="Your Email *" required />
                                    <label style={{ color: "black", marginBottom: "5px" }} for="subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control input_box" name="subject" placeholder="Subject" required />
                                    <label style={{ color: "black", marginBottom: "5px" }} for="message" className="form-label">Message</label>
                                    <textarea className="form-control input_box" placeholder="message" name="message" defaultValue={""} required />
                                    <button type="submit" name="submit" value="Send" className="btn btn-default" id="sendbtn" onclick={this.sendEmail}>Send</button>
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
