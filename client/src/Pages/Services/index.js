import React from 'react';

import "./style.css"

import { List, Image } from 'antd';
import 'antd/dist/antd.css';



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
  "Osgoode Link Trail, Osgoode to Leitrim – The City of yOttawa",
  "Fallowfield Transitway @ Woodroffe – The City of Ottawa",

]

const Roaddata1 = [
  "Wilhaven Subdivision, Wilhaven @ Dunning Rd – Proj. Mgr Novatech Engineering"
]

const SpecializedCarrier = [
  "20 foot Tilt-n-Load truck",
  "Tandems",
  "Tri-axle",
  "Pup Trailers",
  "Tractors",
  "Trailers",
  "Dumb body",
  "Belly dump",
  "Water Haulage"
]

const VariousSpecialized = [
  "Low bed floats",
  "Recessed decks",
  "Tank Trailers",
  "Drop Decks and Flat Decks"
]

const CrawlerDozers = [
  "Bulldozers with low ground pressure",
  "GPS Machine Control available",
  "Caterpillar D6K LGP, D6N LGP & D3G LGP"
]

const Excavators = [
  "Rubber tire excavator – 904 Liebherr",
  '1 excavator with “zero clearance”',
  "Caterpillar 320C , Caterpillar 330C, Komatsu PC 228 & PC 300"
]

const HeavyEquipment = [
  "Caterpillar 420E Backhoe",
  "Caterpillar 950H Rubber Tire Loader",
  "Komatsu W430 Rubber Tire Loader",
  "Caterpillar 242B Skidsteer",
  "Gehl 4835 Skidsteer",
  "Caterpillar 140H Motor Grader",
  "Champion 730 Motor Grader",
  "Compaction Equipment – various sizes",
  "Kubotas with bucket, hydraulic sweeper, snow blower, snow blade and material hopper"

]

const Trucks = [
  "Hauling Equipment",
  "Variety of dump trucks"
]



function Services() {


  return (
    <>

      {/* Banner area */}
      <section className="banner_area" data-stellar-background-ratio="0.5">
        <h2>Our Services</h2>
        {/* <ol className="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="#" className="active">Services 2</a></li>
        </ol> */}
      </section>
      {/* End Banner area */}


      {/* Building Construction Area */}
      <section className="building_construction_area">
        <div className="container">
          <div className="row building_construction_row">
            <div className="row constructing_laft">
              {/* <h2>Constructing</h2> */}
              {/* <img src="../../../public/uploads/gl-7.jpg.jpg" alt /> */}


              <div className="row">


                <ul class="row painting">
                  <div className="col-6">
                    <li><a href="#Building Construction"><i class="fas fa-building" aria-hidden="true"></i>Building Construction</a></li>
                  </div>
                  <div className="col-6">
                    <li><a href="#Road Construction"><i class="fa fa-road" aria-hidden="true"></i>Road Construction</a></li>
                  </div>
                  <div className="col-6">
                    <li><a href="#Transportation"><i class="fa fa-truck" aria-hidden="true"></i>Transportation</a></li>
                  </div>
                  <div className="col-6">
                      <li><a href="#Heavy Equipment Rental"><i class="fas fa-tools" aria-hidden="true"></i>Heavy Equipment Rental</a></li>
                    </div>
                </ul>

                <a id="Building Construction" style={{ textAlign: "center" }}>Building Construction</a>

                <div className="col-7">
                  <div className="row">
                    <div className="col-lg-5 col-md-6 col-xs-12 ">
                      <a style={{ textAlign: "center" }}>Public</a>
                      <List id="items"
                        size="small"
                        dataSource={Buildingdata}
                        renderItem={item => <List.Item  >{item}</List.Item>}
                      />
                    </div>
                    <div className="col-lg-5 col-md-6 col-xs-12 col-6">
                      <a style={{ textAlign: "center" }}>Private</a>
                      <List
                        size="small"
                        dataSource={Buildingdata1}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </div>
                  </div>

                </div>

                <div className="col-lg-5 col-md-6 col-xs-12">

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

                          src="../../uploads/gl-7.jpg"
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



              </div>


              <div id="Services" className="row ">

                <a id="Road Construction" style={{ textAlign: "center" }}>Road Construction</a>
                <div className="col-5">
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

                          src="../../uploads/gl-7.jpg"
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

                <div className="col-7 ">
                  <div className="row">
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
                  </div>
                </div>





              </div>

              <div className="row">
                <a id="Transportation" style={{ textAlign: "center" }}>Transportation</a>

                <div className="col">
                  <div className="row">
                    <div className="col-lg-5 col-md-6 col-xs-12 ">
                      <a style={{ textAlign: "center" }}>Specialized Carrier</a>
                      <List id="items"
                        size="small"
                        dataSource={SpecializedCarrier}
                        renderItem={item => <List.Item  >{item}</List.Item>}
                      />
                    </div>
                    <div className="col-lg-5 col-md-6 col-xs-12 col-6">
                      <a style={{ textAlign: "center" }}>Various Specialized</a>
                      <List
                        size="small"
                        dataSource={VariousSpecialized}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </div>
                  </div>

                </div>

                <div className="col-lg- col-md-6 col-xs-12">

                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}

                          src="../../uploads/rent-truck.jpg"
                        />
                      </div>
                      <div class="carousel-item">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}


                          src="../../uploads/rent-truck2.jpg"
                        />
                      </div>
                      <div class="carousel-item">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}

                          src="../../uploads/rent-truck.jpg"
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


              <div id="Services" className="row ">

                <a id="Heavy Equipment Rental" style={{ textAlign: "center" }}>Heavy Equipment Rental</a>
                <div className="col-5">
                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}

                          src="../../uploads/buldozer.png"
                        />
                      </div>
                      <div class="carousel-item">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}

                          src="../../uploads/buldozer2.jpg"
                        />
                      </div>
                      <div class="carousel-item">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}

                          src="../../uploads/greyder.png"
                        />
                      </div>
                      <div class="carousel-item">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}

                          src="../../uploads/truck.png"
                        />
                      </div>
                      <div class="carousel-item">
                        <Image style={{ border: "solid 2px", maxWidth: "100%" }}

                          src="../../../public/uploads/gl-7.jpg.jpg"
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

                <div className="col-7 ">
                  <div className="row">
                    <div className="col-6">
                      <a style={{ textAlign: "center" }}>CrawlerDozers</a>
                      <List id="items"
                        size="large"
                        dataSource={CrawlerDozers}
                        renderItem={item => <List.Item  >{item}</List.Item>}
                      />
                    </div>

                    <div className="col-6">
                      <a style={{ textAlign: "center" }}>HeavyEquipment</a>
                      <List
                        size="large"
                        dataSource={HeavyEquipment}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </div>
                    <div className="col-6">
                      <a style={{ textAlign: "center" }}>Excavators</a>
                      <List
                        size="large"
                        dataSource={Excavators}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </div>
                    <div className="col-6">
                      <a style={{ textAlign: "center" }}>Trucks</a>
                      <List
                        size="large"
                        dataSource={Trucks}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* <div className="col-sm-6 constructing_laft">
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
                   
                    src="../../../public/uploads/gl-7.jpg.jpg"
                  />

                   
                    </div>
                    <div class="carousel-item">
                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                   src="../../../public/uploads/gl-7.jpg.jpg"
                 />
                    </div>
                    <div class="carousel-item">
                    <Image style={{ border: "solid 2px", maxWidth: "100%" }}
                   
                   src="../../../public/uploads/gl-7.jpg.jpg"
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



            
            </div> */}
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

      <section className="featured_works row" data-stellar-background-ratio="0.3">

        <div className="tittle wow fadeInUp">
          <h2>Our Featured Works</h2>
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
        </div>
        <div className="featured_gallery">

          <div className="row" >
            <div id="service" className="col-lg-4 col-md-6 col-xs-12 col-6 gallery_iner p0">
              <img src="../../uploads/gl-7.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-7.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-7.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-7.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-7.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-7.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-7.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-7.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-7.jpg" alt="..." />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-7.jpg" data-lightbox="image-1">VIEW PROJECT</a>
              </div>
            </div>
            <div id="service" className="col-lg-4 col-md-6 col-xs-12xs-12  col-6 gallery_iner p0">
              <img src="../../uploads/gl-7.jpg" alt=".." />
              <div className="gallery_hover">
                <h4>Bolt Apartments</h4>
                <a href="../../uploads/gl-7.jpg" data-lightbox="image-1">VIEW PROJECT</a>
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

