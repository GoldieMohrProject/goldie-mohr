import React from 'react';

import "./style.css"


import ImageGallery from 'react-image-gallery';




const construction = [
  {
    original: 'Construction/road.jpg',
    thumbnail: 'Construction/road.jpg',
  },
  {
    original: 'Construction/road1.jpg',
    thumbnail: 'Construction/road1.jpg',
  },
  {
    original: 'Construction/truck.JPG',
    thumbnail: 'Construction/truck.JPG',
  },
  {
    original: 'Construction/pipe.jpg',
    thumbnail: 'Construction/pipe.jpg',
  },
  {
    original: 'Construction/pipe2.JPG',
    thumbnail: 'Construction/pipe2.JPG',
  },
  {
    original: 'Construction/pipe3.jpg',
    thumbnail: 'Construction/pipe3.jpg',
  },
  {
    original: 'Construction/ground.JPG',
    thumbnail: 'Construction/ground.JPG',
  },
  {
    original: 'Construction/gravel.jpg',
    thumbnail: 'Construction/gravel.jpg',
  },
  {
    original: 'Construction/asphalt.jpg',
    thumbnail: 'Construction/asphalt.jpg',
  }
];

const transportation = [
  {
    original: 'Transportation/transportation.jpg',
    thumbnail: 'Transportation/transportation.jpg',
  },
  {
    original: 'Transportation/transportation-2.jpg',
    thumbnail: 'Transportation/transportation-2.jpg',
  },
  {
    original: 'Transportation/transportation-3.jpg',
    thumbnail: 'Transportation/transportation-3.jpg',
  },
  {
    original: 'Transportation/transportation4.jpg',
    thumbnail: 'Transportation/transportation4.jpg',
  },

];

const services = [
  {
    original: 'Rental-Equipment/rental-1.jpg',
    thumbnail: 'Rental-Equipment/rental-1.jpg'
  },
  {
    original: "Rental-Equipment/rental-2.jpg",
    thumbnail: "Rental-Equipment/rental-2.jpg"
  },
  {
    original: 'Transportation/transportation-2.jpg',
    thumbnail: 'Transportation/transportation-2.jpg',
  },
  {
    original: 'Transportation/transportation-3.jpg',
    thumbnail: 'Transportation/transportation-3.jpg',
  }

]

// const winter = [
//   {
//     original: 'Winter-Meintenance/winter.mp4',
//     thumbnail: 'Winter-Meintenance/winter.mp4',
//   }
// ]




function Services() {





  return (
    <>

      {/* Banner area */}
      <section className="banner_area" data-stellar-background-ratio="0.5">
        <h2>Our Services & Projects</h2>

      </section>




      <section className="building_construction_area">
        <div className="container">
          <div className="row building_construction_row">
            <div className="row constructing_laft ">


              <div className="row justify-content-center">


                <ul class="row painting">
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Building Construction"><i class="fas fa-building" aria-hidden="true"></i>Building & Road Construction</a></li>
                  </div>
                  <div className="col-lg-5=6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Winter Meintenance"><i class="fa fa-road" aria-hidden="true"></i>Winter Maintenance</a></li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Transportation"><i class="fa fa-truck" aria-hidden="true"></i>Transportation</a></li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Heavy Equipment Rental"><i class="fas fa-tools" aria-hidden="true"></i>Heavy Equipment Rental</a></li>
                  </div>
                </ul>
              </div>
              <div className="row">

                <a id="Building Construction" style={{ textAlign: "center", marginTop: "5%" }}>Building & Road Construction</a>

                <div className="row">
                  {/* <div className="col-1"></div> */}

                  <div className="col">

                    <ImageGallery autoPlay="true" items={construction} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">
                  <div className="col">
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}>  GRAVEL <span className="fas fa-square fa-1x decoration"></span> GRADING <span className="fas fa-square fa-1x decoration" ></span> ROAD BUILD <span className="fas fa-square fa-1x decoration"></span> ASPHALT MAINTANENCE <span className="fas fa-square fa-1x decoration"></span> PARKING LOT  </p>
                    </div>
                  </div>

                  {/* <div className="col-lg-2 col-md-3 col-xs-12 ">


                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      GRAVEL

                    </a>
                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        GRADING
                    </a>


                  </div>

                  <div className="col-lg-2 col-md-3 col-xs-12 ">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        ROAD BUILD
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        ASPHALT MAINTANENCE
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                     PARKING LOT
                  </a>

                  </div>


                </div> */}
                </div>
              </div>

              <div className="row">

                <a id="Transportation" style={{ textAlign: "center", marginTop: "5%" }}>Transportation</a>

                <div className="row">


                  <div className="col">

                    <ImageGallery autoPlay="true" items={transportation} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">

                  <div className="col">
                    <div style={{ fontSize: "25px", textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}> TRACTORS <span className="fas fa-square fa-1x decoration"></span> TRAILERS <span className="fas fa-square fa-1x decoration" ></span> ROAD BUILD <span className="fas fa-square fa-1x decoration"></span> TANK TRAILERS <span className="fas fa-square fa-1x decoration"></span> TRI-AXLE
                    </p>
                    </div>
                  </div>

                  {/* <div className="col-lg-2 col-md-2 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TRACTORS
                    </a>

                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TRAILERS
                    </a>

                  </div>

                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        ROAD BUILD
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TANK TRAILERS
                    </a>

                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TRI-AXLE
                    </a>

                  </div> */}

                </div>
              </div>

              <div className="row">

                <a id="Winter Meintenance" style={{ textAlign: "center", marginTop: "5%" }}>Winter Maintenance</a>

                <div className="row">


                  <div className="col">

                    <ImageGallery autoPlay="true" items={construction} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">

                  <div className="col">
                    <div style={{ fontSize: "25px", textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}>  TRACTORS <span className="fas fa-square fa-1x decoration"></span> REMOVING SNOW <span className="fas fa-square fa-1x decoration" ></span> CLEANING SIDEWALKS <span className="fas fa-square fa-1x decoration"></span> DE-ICING
                    </p>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        REMOVING SNOW
                    </a>

                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        CLEANING SIDEWALKS
                    </a>

                  </div>

                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        DE-ICING
                    </a>

                  </div> */}

                </div>
              </div>



              <div className="row">

                <a id="Heavy Equipment Rental" style={{ textAlign: "center", marginTop: "5%" }}>Heavy Equipment Rental</a>

                <div className="row">

                  <div className="col">

                    <ImageGallery autoPlay="true" items={services} />

                  </div>

                </div>
                <div style={{ marginTop: '5%' }} className="row">

                  <div className="col">
                    <div style={{ fontSize: "25px", textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}>  TRACTORS <span className="fas fa-square fa-1x decoration"></span> TRACKTOR <span className="fas fa-square fa-1x decoration" ></span> GRADER <span className="fas fa-square fa-1x decoration"></span> TRUCK <span className="fas fa-square fa-1x decoration"></span> EXCAVATORS
                    </p>
                    </div>
                  </div>


                  {/* <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      TRACKTOR
                    </a>


                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      GREYDER
                    </a>


                  </div>

                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      TRUCK
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      EXCAVATORS
                    </a>

                  </div> */}

                </div>



              </div>
              {/* </div> */}




            </div>

          </div>
        </div>
      </section>



      {/* <div className="contact_us">
                <h4>Contact Us</h4>
                <a className="contac_namber">Phone: +1 613 838 5042</a>
                <a className="contac_namber">Toll Free: +1 800 267 55 13</a>
                <a className="contac_namber">Fax: +1 613 838 58 08</a>

                <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. If you use this site regularly and would like to help keep</p>
                <a className="button_all">Contact Us</a>
              </div> */}






      {/* End Building Construction Area */}

      {/* Our Featured Works Area */}

      <section className="featured_works_one row" data-stellar-background-ratio="0.3">

        <div className="tittle wow fadeInUp">
          <h2 style={{ color: "black" }}>Our Featured Works</h2>
          <h4 style={{ color: "black", lineHeight: "200%" }}>As our core service, Goldie Mohr Ltd has the ability to mobilize and execute large earth excavation projects with precision. Our large fleet of trucks and dedicated construction professionals will ensure the timely delivery of your site to the next trade on grade and on time. Please use the links below to have a look at some of the future projects.</h4>
        </div>
        <div className="featured_gallery">

          <div className="row" >
            <div id="service" className="col-lg-4 col-md-6 col-xs-12 col-6 gallery_iner p0">
              <img src="Transportation/transportation-3.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>2021 Project</h4>
                <a href="Transportation/transportation-3.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12  col-6 gallery_iner p0">
              <img src="Transportation/transportation-3.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>2021 Project</h4>
                <a href="Transportation/transportation-3.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12  col-6 gallery_iner p0">
              <img src="Transportation/transportation-3.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>2021 Project</h4>
                <a href="Transportation/transportation-3.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="Transportation/transportation-3.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>2021 Project</h4>
                <a href="Transportation/transportation-3.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="Transportation/transportation-3.jpg" alt="..." />
              <div className="gallery_hover">
                <h4>2021 Project</h4>
                <a href="Transportation/transportation-3.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="Transportation/transportation-3.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>2021 Project</h4>
                <a href="Transportation/transportation-3.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* End Our Featured Works Area */}

    </>




  );
}

export default Services;

