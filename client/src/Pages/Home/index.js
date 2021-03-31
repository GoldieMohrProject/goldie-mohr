import React from 'react'
import Wrapper from '../../Components/Wrapper'
import Slider from '../../Components/Slider'
import './style.css'

function Home() {
    return (
        <Wrapper>
            <Slider/>
            <section class="row professional_builder">
                <div class="container">
                    <div class="row builder_all">
                        <div class="col-md-3 col-sm-6 builder">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <h4>Professional Build</h4>
                            <p>We provide the finest build quality to ensure our customers' satisfaction</p>
                        </div>
                        <div class="col-md-3 col-sm-6 builder">
                            <i class="fa fa-building" aria-hidden="true"></i>
                            <h4>We Deliver Quality</h4>
                            <p>We value your satisfaction and will work hard to surpass your expectations</p>
                        </div>
                        <div class="col-md-3 col-sm-6 builder">
                            <i class="fa fa-clock" aria-hidden="true"></i>
                            <h4>Always On Time</h4>
                            <p>Punctuality is of upmost importance when it comes to our workflow</p>
                        </div>
                        <div class="col-md-3 col-sm-6 builder">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            <h4>We Are Passionate</h4>
                            <p>We will work tirelessly to complete projects demanded by our customers</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About us */}
            <section class="row about_us_area">
                <div class="container ">
                    <div class="tittle">
                        <h2>About Us</h2>
                        <h4>We strive to provide MOHR Value to our customers, our team members and our suppliers.
                             Whether your needs are for one yard of topsoil, the site preparation of a new building,
                              a culvert replacement, a recreation area or a new road, GOLDIE MOHR LTD can help you. 
                              We are a heavy civil construction company. Our services include earth moving, transportation,
                               heavy equipment rental, winter maintenance and float services.
                            </h4>
                    </div>

                    <div class="row about_row">
                        <div class="col-md-7 col-sm-6 who_we_area">
                            <div class="subtittle">
                                <h2>WHO WE ARE</h2>
                            </div>
                            <p>We aim to satisfy your heavy civil construction needs from project management to equipment rental.
                                 The GOLDIE MOHR LTD. team will provide quality service from snow removal to heavy specialized
                                  transportation. We are the professionals to deliver quality service for any and all your heavy 
                                  civil construction projects. Please remember our premium building and landscaping materials at 
                                  competitive prices.

                            GOLDIE MOHR LTD. is a Canadian family business. 2020 We celebrate our 60th anniversary.

                          </p>
                            <a href="#" class="button_all">Contact Now</a>
                        </div>
                        <div class="col-md-5 col-sm-6 about_client">
                            <img src="https://user-images.githubusercontent.com/71358869/112927046-5ea7dc80-90e2-11eb-8de6-772e20995f93.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="what_we_area row">
                <div class="container">
                    <div class="tittle wow fadeInUp">
                        <h2>WHAT WE OFFER</h2>
                        <h4 style={{fontWeight:'bolder'}}>Goldie Mohr Ltd has the ability to mobilize and execute large earth excavation projects with precision.</h4>
                        <h4>Our Services Includes But Are Not Limited To:</h4>
                    </div>
                    <div class="row construction_iner">
                        <div class="col-md-4 col-sm-6 construction">
                            <div class="cns-img">
                                <img src="images/cns-1.jpg" alt="" />
                            </div>
                            <div class="cns-content">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <a href="#">BUILDING CONSTRUCTION</a>
                                <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 construction">
                            <div class="cns-img">
                                <img src="images/cns-2.jpg" alt="" />
                            </div>
                            <div class="cns-content">
                                <i class="fa fa-keyboard" aria-hidden="true"></i>
                                <a href="#">HEAVY EQUIPMENT RENTAL</a>
                                <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 construction">
                            <div class="cns-img">
                                <img src="images/cns-3.jpg" alt="" />
                            </div>
                            <div class="cns-content">
                                <i class="fa fa-gavel" aria-hidden="true"></i>
                                <a href="#">DEMOLITION</a>
                                <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="our_feature_area">
                <div class="container">
                    <div class="tittle wow fadeInUp" >
                        <h2>Our Features</h2>
                        <h4>After many years of service in the Ottawa community, we feel confident that we can cater to your needs. 
                            We get the job done and we don’t just meet expectations; we exceed them. Our customers keep coming back
                             because we are dependable, knowledgeable and pleasant to work with.</h4>
                    </div>
                    <div class="feature_row row">
                        <div class="col-md-6 feature_img">

                            <section class="our_achievments_area" data-stellar-background-ratio="0.3" style={{ backgroundPosition: '50% 35.22px' }}>

                                <div class="tittle wow fadeInUp" >
                                    <h2>Our Achievements</h2>
                                    <h4>the signature blue trucks with the golden horseshoe on the door are now quite familiar sights throughout eastern Ontario and Western Quebec.</h4>
                                </div>
                                <div class="achievments_row row">
                                    <div class="col-md-3 col-sm-6 p0 completed">
                                        <i class="fa fa-check-square" aria-hidden="true"></i>
                                        <span class="counter">800</span>
                                        <h6>PROJECT COMPLETED</h6>
                                    </div>
                                    <div class="col-md-3 col-sm-6 p0 completed">
                                        <i class="fa fa-home" aria-hidden="true"></i>
                                        <span class="counter">229</span>
                                        <h6>HOUSE RENOVATIONS</h6>
                                    </div>
                                    <div class="col-md-3 col-sm-6 p0 completed">
                                        <i class="fa fa-child" aria-hidden="true"></i>
                                        <span class="counter">100</span>
                                        <h6>WORKERS EMPLOYED</h6>
                                    </div>
                                    <div class="col-md-3 col-sm-6 p0 completed">
                                        <i class="fa fa-trophy" aria-hidden="true"></i>
                                        <span class="counter">25</span>
                                        <h6>AWARDS WON</h6>
                                    </div>
                                </div>
                            </section>




                        </div>
                        <div class="col-md-6 feature_content">
                            <div class="container">
                                <div class="subtittle" style={{marginTop:'3%'}}>
                                    <h3>WHY CHOOSE US</h3>
                                    <h6>Aside from our amazing staff,we take the time and care to make sure even the tiniest
                                         detail is managed, in every circumstance.</h6>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <a href="#">60+ YEARS OF EXPERIENCE</a>
                                        <p>Our long experience means we have expertise which reaches across a number of services, as well as knowledge of specific protocol and local regulations. But we know that things change, and we are constantly striving to adapt and improve. </p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-users" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <a href="#">Best Customer Services</a>
                                        <p>Our employees provide unmatched service, delivering top quality service for your business! All of our team members are committed to personal service. In keeping with this desire, we are not satisfied with our work until you are as well.</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-rocket" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <a href="#">QUALIFIED EXPERTS</a>
                                        <p>You want results? Contact us today !There really is no other way. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row featured_works backgroundd" data-stellar-background-ratio="0.3" style={{ backgroundPosition: ' 50% -1185.36px', marginTop:'5%', marginBottom:'0.11%' }}>
                <div class="tittle wow fadeInUp">
                    <h2>Safety</h2>
                    <h4 style={{paddingLeft:'10%', paddingRight:'10%',lineHeight: '140%', marginTop:'4%'}}>As a member of the W.S.I.B Safety Group, Goldie Mohr Ltd. is able to reduce workplace injuries and ensure 
                        safety at all job sites. The main focus of the Goldie Mohr Ltd. safety department is to create the safest
                         environment possible, for all stakeholders (the public, employees, sub-contractors and customers) by
                          maintaining the policies and standards influenced by W.S.I.B. Safety Group.  Accident prevention is what 
                          Goldie Mohr Ltd. strives for through this program.</h4>
                </div>
            </section>
            
        </Wrapper>

    )
}

export default Home