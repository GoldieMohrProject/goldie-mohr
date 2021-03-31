import React from 'react'
import './style.css'

import Email from '../Footer/Email.png'
import Phone from '../Footer/Phone.png'
import Address from '../Footer/Address.png'
import  { goToTop,removeHash } from 'react-scrollable-anchor'

function Footer() {
    function goTop(){
        removeHash()
        goToTop()
    }
    return (
        <>
            <div id="upperFooter" >
                <div className="container">
                    <div className="row">
                        <div class="col-md-6 col-sm-6" style={{ marginTop: "15px", marginBottom: "15px" }}>
                            <h4 style={{ color: "white", marginBottom: "7px" }}>ABOUT OUR COMPANY</h4>
                            {/* <img src={ } alt=""> logo here maybe!!!! */}
                            <div className="footerText">We are a heavy civil construction company. Our services include earth moving, transportation, heavy equipment rental, winter maintenance and float services</div>
                            {/* <ul id="socialmedia"> */}
                            <li style={{ display: "inline-flex", marginRight: "10px" }}><a href="https://www.facebook.com/GoldieMohr" target="_blank" className="button_social"><i id="facebooklogo" class="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                            <li style={{ display: "inline-flex", marginRight: "10px" }}><a href="https://www.facebook.com/GoldieMohr" target="_blank" className="button_social"><i id="twitterlogo" class="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li style={{ display: "inline-flex", paddingLeft:'100px'}}>
                                <a href class='animated-arrow' onClick={goTop}>
                                    <span class='the-arrow -left'>
                                        <span class='shaft'></span>
                                    </span>
                                    <span class='main'>
                                        <span class='text'>
                                            Scroll Top
                                            </span>
                                        <span class='the-arrow -right'>
                                            <span class='shaft'></span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                         

                        </div>
                        {/* end of about our company */}
                        <div class="col-md-6 col-sm-6" style={{ marginTop: "15px", marginBottom: "15px" }}>
                            <h4 style={{ color: "white", marginBottom: "7px" }}>CONTACT US</h4>
                            {/* <img src={ } alt=""> logo here maybe!!!! */}
                            <div className="footerText">You have questions, comments or you want to visit us</div>
                            <div style={{ marginBottom: "10px" }}><img src={Email} width="15px" height="15px" alt="Email" /> <div style={{ display: "inline", paddingLeft: "5px" }}>info@goldiemohrltd.ca</div></div>
                            <div style={{ marginBottom: "10px" }}><img src={Phone} width="15px" height="15px" alt="Phone" /> <div style={{ display: "inline", paddingLeft: "5px" }}>+1 (613) 838-5042</div></div>
                            <div style={{ marginBottom: "10px" }}><img src={Address} width="15px" height="18px" alt="Address" /> <div style={{ display: "inline", paddingLeft: "5px" }}>3862 Moodie Drive, Nepean, Ontario</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer" style={{ textAlign: "center" }}>
                <div id="copyright" >&#169;2021 goldie mohr ltd. All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer