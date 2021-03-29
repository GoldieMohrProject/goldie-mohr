import React from 'react';

import "./style.css"

import { List, Image } from 'antd';
import 'antd/dist/antd.css';
import iii from "../../uploads/gl-7.jpg"

const Buildingdata = [
  ' French Catholic School Kanata Lakes – Ed. Brunet & Assoc.',
  ' Michaelle Jean Elementary School – Barrhaven',

];

const Buildingdata1 = [
  ' Walmart- Innes Road',
  'Best Buy – Kanata Centrum',
  ' Hockey Life – Kanata Centrum',
  'Play-it-again Sports – Terry Fox Drive North',


];
const Roaddata = [
  "Small Culverts, West – Murphy, Herzberg, Donnelly Roads – The City of Ottawa",
  "Richmond Road Widening, Richmond @ Stonehaven – The City of Ottawa",
  "Osgoode Link Trail, Osgoode to Leitrim – The City of Ottawa",
  "Fallowfield Transitway @ Woodroffe – The City of Ottawa",
  "Nicolls Island Road Rehabilitation (Barnsdale @ Cecil Mowat) – The City of Ottawa",
  "Cambridge Street Reconstruction, Carling @ Bronson – C.A.C.E. Construction"
]

const Roaddata1 = [
  "Wilhaven Subdivision, Wilhaven @ Dunning Rd – Proj. Mgr Novatech Engineering"
]




function Services() {


  return (
    <>

      {/* Banner area */}
      <section className="banner_area" data-stellar-background-ratio="0.5">
        <h2>Our Services</h2>
        <ol className="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="#" className="active">Services 2</a></li>
        </ol>
      </section>
      {/* End Banner area */}


      {/* Building Construction Area */}
      <section className="building_construction_area">
        <div className="container">
          <div className="row building_construction_row">
            <div className="col-sm-6 constructing_laft">
              {/* <h2>Constructing</h2> */}
              {/* <img src="../../uploads/gl-2.jpg" alt /> */}
              <a style={{ textAlign: "center" }}>Building Construction</a>
              <div className="row color">
                <div className="col-6">
                  <a style={{ textAlign: "center" }}>Public</a>
                  <List id="items"
                    size="large"
                    dataSource={Buildingdata}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>
                <div className="col-6">
                  <a style={{ textAlign: "center" }}>Private</a>
                  <List
                    size="large"
                    dataSource={Buildingdata1}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </div>

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                   src="../../uploads/gl-7.jpg"
                 />
                    </div>
                    <div class="carousel-item">
                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                    src={{iii}}
                  />
                    </div>
                    <div class="carousel-item">
                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                   src="../../uploads/gl-7.jpg"
                 />
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="row">
                <a style={{ textAlign: "center" }}>Road Construction</a>
                <div className="row color">
                  <div className="col-6">
                    <a style={{ textAlign: "center" }}>Public</a>
                    <List id="items"
                      size="large"
                      dataSource={Roaddata}
                      renderItem={item => <List.Item  >{item}</List.Item>}
                    />
                  </div>
                  <div className="col-6">
                    <a style={{ textAlign: "center" }}>Private</a>
                    <List
                      size="large"
                      dataSource={Roaddata1}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </div>

                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                      <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                    src="../../uploads/gl-2.jpg"
                  />
                      </div>
                      <div class="carousel-item">
                      <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                    src="../../uploads/gl-2.jpg"
                  />
                      </div>
                      <div class="carousel-item">
                      <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                   src="../../uploads/gl-2.jpg"
                 />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>


              </div>

            </div>
            <div className="col-sm-6 constructing_laft">
              <a style={{ textAlign: "center" }}>Demolition</a>
              <div className="row color">
                <div className="col-6">
                  <a style={{ textAlign: "center" }}>Public</a>
                  <List id="items"
                    size="large"
                    dataSource={Buildingdata}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
               
                </div>
                <div className="col-6">
                  <a style={{ textAlign: "center" }}>Private</a>
                  <List
                    size="large"
                    dataSource={Buildingdata1}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </div>

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active" style={{marginLeft:"20%"}}>

                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                    src="../../uploads/gl-2.jpg"
                  />

                   
                    </div>
                    <div class="carousel-item">
                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                   src="../../uploads/gl-2.jpg"
                 />
                    </div>
                    <div class="carousel-item">
                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                   src="../../uploads/gl-2.jpg"
                 />
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>



              {/* <div className="contact_us">
                <h4>Contact Us</h4>
                <a className="contac_namber">Phone: +1 613 838 5042</a>
                <a className="contac_namber">Toll Free: +1 800 267 55 13</a>
                <a className="contac_namber">Fax: +1 613 838 58 08</a>

                <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. If you use this site regularly and would like to help keep</p>
                <a className="button_all">Contact Us</a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* End Building Construction Area */}

      {/* Our Featured Works Area */}

      <section className="featured_works row" data-stellar-background-ratio="0.3">

        <div className="tittle wow fadeInUp">
          <h2>Our Featured Works</h2>
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
        </div>
        <div className="featured_gallery">

          <div className="row" >
            <div id="service" className="col-lg-4 col-md-6 col-xs-12 col-6 gallery_iner p0">
              <img src="../../uploads/gl-2.jpg" alt />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-2.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-2.jpg" alt />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-2.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-2.jpg" alt />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-2.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-2.jpg" alt />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-2.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-2.jpg" alt />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-2.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-2.jpg" alt />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-2.jpg" data-lightbox="image-1">VIEW PROJECT</a>
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

