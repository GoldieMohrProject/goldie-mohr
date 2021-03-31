
import React from 'react';
import './style.css'



function Contact() {
    return (
        <>
            {/* Banner area */}
            <section className="banner_area" data-stellar-background-ratio="0.5">
                <h2>Contact Us</h2>
              
            </section>
            {/* End Banner area */}

            {/* Map */}
            <div className="contact_map">
                <iframe src="https://www.google.ca/maps?f=q&source=s_q&hl=en&geocode=&q=3862+Moodie+Drive,+Ottawa,+ON&aq=0&oq=3862+Moodie+Drive&sll=45.250157,-75.800257&sspn=0.592656,1.295013&ie=UTF8&hq=&hnear=3862+Moodie+Dr,+Ottawa,+Ottawa+Division,+Ontario+K0A+2Z0&t=m&z=14&ll=45.217851,-75.772802&output=embed" />
            </div>
            {/* End Map */}

            {/* All contact Info */}
            <section className="all_contact_info">
                <div className="container">
                    <div className="row contact_row">
                        <div className="col-sm-6 contact_info">
                            <h2>Contact Info</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            <div className="location">
                                <div className="location_laft">
                                    <a className="f_location" >location</a>
                                    <a >phone</a>
                                    <a > toll free</a>
                                    <a >fax</a>
                                    <a >email</a>
                                    <a >Mail </a>
                                </div>
                                <div className="address">
                                    <a >3862 Moodie Drive, Nepean, <br /> Ontario </a>
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
                            <form action="mailto:f.sultanay@gmail.com" method="GET" className="form-inline contact_box">
                                <input type="text" className="form-control input_box" name="name" placeholder="First Name *" />
                                <input type="text" className="form-control input_box" name="lastName" placeholder="Last Name *" />
                                <input type="email" className="form-control input_box" name="email" placeholder="Your Email *" />
                                <input type="text" className="form-control input_box" name="Subject" placeholder="Subject" />
                                <textarea className="form-control input_box" placeholder="Message" defaultValue={""} />
                                <button type="submit" name="submit" value="Send" className="btn btn-default">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End All contact Info */}



        </>

    );
}

export default Contact;
