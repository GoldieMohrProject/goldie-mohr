import React from 'react'
import './style.css'

class Slider extends React.Component {
 
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "js/slider.js";
    //For head
    document.head.appendChild(script);

    // For body
    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <div className="sld-container" id="sld-container">
          <div className="sld-caption" id="slider-caption">
            <div className="sld-caption-heading">
              <h1>Lorem Ipsum</h1>
            </div>
            <div className="sld-caption-subhead"><span>dolor sit amet, consectetur adipiscing elit.</span></div><a className="btn" href="#">Sit Amet</a>
          </div>
          <div className="left-col" id="left-col">
            <div id="left-slider" />
          </div>
          <ul className="sld-nav">
            <li className="slide-up"> <a href="#">&lt;</a></li>
            <li className="slide-down"> <a id="down_button" href="#">&gt;</a></li>
          </ul>
        </div>
      </>
    )
  }
}

export default Slider