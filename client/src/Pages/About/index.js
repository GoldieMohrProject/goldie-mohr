import "./style.css"

import React from 'react';
import './style.css';

// history photos
import history1 from '../../assets/history1.jpg'
import history2 from '../../assets/history2.jpg'
import history3 from '../../assets/history3.jpg'
import history4 from '../../assets/history4.jpg'
import history5 from '../../assets/history5.jpg'
import history6 from '../../assets/history6.jpg'

// membership photos
import team from '../../assets/team.jpg'
import CAFE from '../../assets/CAFE.png'
import Dig from '../../assets/Dig.png'
import ISHA from '../../assets/ISHA.png'
import NCHCA from '../../assets/NCHCA.png'
import OCA from '../../assets/OCA.png'
import OSWCA from '../../assets/OSWCA.png'
import OTA from '../../assets/OTA.png'
import WSIB from '../../assets/WSIB.png'


function About() {
  


  return (
    <>
      <h1 className="title">ABOUT US</h1>
      <hr className="titleline"></hr>

      <section className="about_us_area about_us_2 row">
        <div className="container">
          <div className="row about_row about_us2_pages">
            <div className="col-md-7">
              <div className="subtittle">
                <h2>WHO WE ARE</h2>
              </div>
              <p>
                In 1960, at a tender young age, Goldie Mohr bought his first truck (a 1958 Ford) after a career
                working with Thomas G. Fuller and other local contractors. He set out on his own with the hopes
                of getting to play in the sand with his own big play toys. Goldie would work as an owner
                operator hauling whatever payload he could get. In the winter months, it was logs up north, in
                the spring and summer it was aggregates and asphalt, and in the fall it was road salt. With a
                backhoe and a dump truck and lots of hard work, Goldie began helping people build their dreams:
          homes, cottages, businesses, churches, farms and roads. </p>
              <p>
                In 1966, Goldie married Mary Murphy and together became a business team growing a successful
                enterprise. Their daughter, Debbie was born a few years later. Mary and Debbie were the official
                business managers / parts and tire purchasers. The folks at Frisby Tire and Malmberg Truck
                Center often recall Debbie sitting up on the counter. Goldie and Mary built this company into a
                very viable, respected corporation.
        </p>
              <p>
                Soon the area serviced grew and eventually, so did the fleet of equipment, trucks and employees
                at Goldie Mohr Ltd. The scope of work has evolved to include site preparation, custom trucking,
                float service, topsoil manufacture and winter maintenance. We are a heavy civil construction
                company. As of 1996, the company is operated as a tribute to our founders by Deborah
                Mohr-Caldwell as Director- Vice President and Ann McKenna as the President and Chief Executive
                Officer of the company.
        </p>
              <p>
                Located in Fallowfield, a hamlet of Nepean / Ottawa, the signature blue trucks with the golden
                horseshoe on the door are now quite familiar sights throughout eastern Ontario and Western
                Quebec.
        </p>
            </div>

            <div className="col-md-5 our_skill_inner">
              <div className="subtittle">
                <h2>WHAT WE DO</h2>
              </div>
              <br></br>
              <div className="single_skill">
                <h3>Heavy Civil Construction</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{ width: "89%" }}>
                    <div className="progress_parcent"><span className="counter2">89</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Demolition</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={58} aria-valuemin={0} aria-valuemax={100} style={{ width: "58%" }}>
                    <div className="progress_parcent"><span className="counter2">58</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Road Construction</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={44} aria-valuemin={0} aria-valuemax={100} style={{ width: "44%" }}>
                    <div className="progress_parcent"><span className="counter2">44</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Building Construction</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} style={{ width: "76%" }}>
                    <div className="progress_parcent"><span className="counter2">76</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Transportation</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={64} aria-valuemin={0} aria-valuemax={100} style={{ width: "64%" }}>
                    <div className="progress_parcent"><span className="counter2">64</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Heavy Equipment Rental</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} style={{ width: "83%" }}>
                    <div className="progress_parcent"><span className="counter2">83</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Topsoil &amp; Aggregates</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={64} aria-valuemin={0} aria-valuemax={100} style={{ width: "64%" }}>
                    <div className="progress_parcent"><span className="counter2">64</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Winter Maintenance</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={64} aria-valuemin={0} aria-valuemax={100} style={{ width: "64%" }}>
                    <div className="progress_parcent"><span className="counter2">64</span>%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* HISTORY IMAGES SECTION */}
      <div className="history-container justify-content-center">
        {/* Full-width images with number text */}
        {/* <div className="mySlides">
          <div className="numbertext">1 / 6</div>
          <img src={history1} style={{ width: '100%' }} />
        </div>
        <div className="mySlides">
          <div className="numbertext">2 / 6</div>
          <img src={history2} style={{ width: '100%' }} />
        </div>
        <div className="mySlides">
          <div className="numbertext">3 / 6</div>
          <img src={history3} style={{ width: '100%' }} />
        </div>
        <div className="mySlides">
          <div className="numbertext">4 / 6</div>
          <img src={history4} style={{ width: '100%' }} />
        </div>
        <div className="mySlides">
          <div className="numbertext">5 / 6</div>
          <img src={history5} style={{ width: '100%' }} />
        </div>
        <div className="mySlides">
          <div className="numbertext">6 / 6</div>
          <img src={history6} style={{ width: '100%' }} />
        </div> */}
        {/* Next and previous buttons */}
        {/* <a className="prev" onclick="plusSlides(-1)">❮</a>
        <a className="next" onclick="plusSlides(1)">❯</a> */}
        {/* Image text */}
        {/* <div className="caption-container">
          <p id="caption" />
        </div> */}
        {/* Thumbnail images */}
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history1} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history2} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history3} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history4} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history5} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history6} style={{ width: '100%' }} alt="old photo" />
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="subtittle">
            <h2>WE GOT YOUR BACK</h2>
          </div>
          <div className="profile">
            <p>
              After many years of service in the Ottawa community, we feel confident that we can cater to your needs. We get the job done and we don’t just meet expectations; we exceed them. Our customers keep coming back because we are dependable, knowledgeable and pleasant to work with.
          </p>
            <p>
              Our employees provide unmatched service, delivering top quality service for your business! All of our team members are committed to personal service. In keeping with this desire, we are not satisfied with our work until you are as well.
          </p>

            <p>
              Aside from our amazing staff, we take the time and care to make sure even the tiniest detail is managed, in every circumstance. There really is no other way. Contact us today and find out how we can help you. It is our pleasure!
            </p>
          </div>

          <a href="#" className="contactbtn">Contact Now</a>
          <br></br>

        </div>
      </section>

      {/* Community Area */}
      <br></br>
      <section className="our_partners_area">
        <div className="book_now_aera">
          <div className="container">
            <div className="col-md-10">
              <h4>Our community is important to us.</h4>

              <p className="communityarea">
                As a company we truly believe that we have a genuine responsibility to help better the communities we do business in.
                </p>

              <p className="communityarea">
                Over the years GOLDIE MOHR LTD. has supported many local charity groups, charity events, sports teams, service clubs and organizations. As a team, we believe a place should be left better than found and we strive to make this possible through our community involvement.
                </p>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      {/* End Community Area */}

      {/* Our Team Area */}
      <section className="our_team_area">
        <div className="container">
          <div className="tittle wow fadeInUp">

            <div className="centering">
              <h2>Our Team</h2>
            </div>
            <div className="teamstuff">
              <p>At Goldie Mohr Limited, we believe that our people are our greatest asset!</p>
              <img src={team} alt="team photo" className="teampic" />
            </div>

          </div>
        </div>
      </section>

      <section className="our_feature_area">
        <div className="container">
          <div className="tittle wow fadeInUp">
            <div>
              <h2>Memberships</h2>
              <br></br>
            </div>
          </div>
        </div>

        <div className="membershiparea">
          <img src={CAFE} className="imgmemb" />
          <img src={Dig} className="imgmemb" />
          <img src={ISHA} className="imgmemb" />
          <img src={NCHCA} className="imgmemb" />
        </div>
        <div className="membershiparea">
          <img src={OCA} className="imgmemb" />
          <img src={OSWCA} className="imgmemb" />
          <img src={OTA} className="imgmemb" />
          <img src={WSIB} className="imgmemb" />
        </div>


      </section>

    </>

  );
}

export default About;



