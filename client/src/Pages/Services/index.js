import React from 'react';

import "./style.css"

import { List, Image, Carousel } from 'antd';
import 'antd/dist/antd.css';

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
    original: 'Construction/truck.jpg',
    thumbnail: 'Construction/truck.jpg',
  },
  {
    original: 'Construction/pipe.jpg',
    thumbnail: 'Construction/pipe.jpg',
  },
  {
    original: 'Construction/pipe2.jpg',
    thumbnail: 'Construction/pipe2.jpg',
  },
  {
    original: 'Construction/pipe3.jpg',
    thumbnail: 'Construction/pipe3.jpg',
  },
  {
    original: 'Construction/ground.jpg',
    thumbnail: 'Construction/ground.jpg',
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
    original: 'Transportation/transportation2.jpg',
    thumbnail: 'Transportation/transportation2.jpg',
  },
  {
    original: 'Transportation/transportation3.jpg',
    thumbnail: 'Transportation/transportation3.jpg',
  },
  {
    original: 'Transportation/transportation4.jpg',
    thumbnail: 'Transportation/transportation4.jpg',
  },
  
];


const buildingRoadConstruction = [
"Gravel",
"Grading",
]

const Transportation = [
  "Tractors",
  "Trailers",
  "Tank Trailers",
  "Tri-axle",
  "Tandems"
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

      </section>
   


    
      <section className="building_construction_area">
        <div className="container">
          <div className="row building_construction_row">
            <div className="row constructing_laft">
           

              <div className="row">


                <ul class="row painting">
                  <div className="col-lg-5 col-md-6 col-xs-12 col-6">
                    <li><a href="#Building Construction"><i class="fas fa-building" aria-hidden="true"></i>Building & Road Construction</a></li>
                  </div>
                  <div className="col-lg-5 col-md-6 col-xs-12 col-6">
                    <li><a href="#Winter Meintenance"><i class="fa fa-road" aria-hidden="true"></i>Winter Maintenance</a></li>
                  </div>
                  <div className="col-lg-5 col-md-6 col-xs-12 col-6">
                    <li><a href="#Transportation"><i class="fa fa-truck" aria-hidden="true"></i>Transportation</a></li>
                  </div>
                  <div className="col-lg-5 col-md-6 col-xs-12 col-6">
                    <li><a href="#Heavy Equipment Rental"><i class="fas fa-tools" aria-hidden="true"></i>Heavy Equipment Rental</a></li>
                  </div>
                </ul>
              </div>
              <div className="row">

                <a id="Building Construction" style={{ textAlign: "center" }}>Building & Road Construction</a>

                <div className="col-3">
                  <List id="items"
                    size="small"
                    dataSource={buildingRoadConstruction}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>
                <div className="col-7">

                  <ImageGallery items={construction} />

                </div>
                <div className="col-2">
             
                </div>

              </div>

              <div className="row">

                <a id="Transportation" style={{ textAlign: "center", marginTop: "5%" }}>Transportation</a>

                <div className="col-3">
                  <List id="items"
                    size="large"
                    dataSource={CrawlerDozers}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>
                <div className="col-7">
                  <ImageGallery items={transportation} />

                </div>
                <div className="col-2">
                  <List id="items"
                    size="large"
                    dataSource={Transportation}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>

              </div>

              <div className="row">

                <a id="Winter Meintenance" style={{ textAlign: "center", marginTop: "5%" }}>Winter Meintenance</a>

                <div className="col-3">
                  <List id="items"
                    size="large"
                    dataSource={Transportation}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>
                <div className="col-7">
                  {/* <ImageGallery items={} /> */}

                  </div>
                <div className="col-2">
                  <List id="items"
                    size="large"
                    dataSource={CrawlerDozers}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>

              </div>

              <div className="row">

                <a id="Heavy Equipment Rental" style={{ textAlign: "center", marginTop: "5%" }}>Heavy Equipment Rental</a>

                <div className="col-3">
                  <List id="items"
                    size="large"
                    dataSource={CrawlerDozers}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>
                <div className="col-7">
                  {/* <ImageGallery items={} /> */}

                  </div>
                <div className="col-2">
                  <List id="items"
                    size="large"
                    dataSource={CrawlerDozers}
                    renderItem={item => <List.Item  >{item}</List.Item>}
                  />
                </div>

              </div>

              


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

