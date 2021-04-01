

import React from 'react';
import './style.css'
import aggregates from "../Products/aggregates.png"
import topsoil from "../Products/topsoil.jpeg"


function Product() {
    return (

        <>

            <div id="products">
                <h1 id="productTitle">PRODUCTS</h1>
            </div>


            <div className="container">
                <div style={{ marginBottom: "40px", marginTop: "40px" }}>
                    <div className="row">
                        <div className="card col-12 col-lg-5 col-xl-5 col-md-5" style={{ width: "24rem", borderBottom: "5px solid #3178C6", margin: "25px", borderRadius: "0px" }}>
                            <img src={aggregates} height="300px"/>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign:"center",margin:"5%"}}>AGGREGATES</h5>
                                <p className="card-text">An array of beautifully-coloured river stone in a variety of sizes has now been made available by Goldie Mohr Ltd and Dwyer Pit.</p>
                            </div>
                        </div>
                        <div className="card col-12 col-lg-5 col-xl-5 col-md-5" style={{ width: "24rem", borderBottom: "5px solid #3178C6", margin: "25px", borderRadius: "0px" }}>
                            <img src={topsoil} height="300px"/>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign:"center",margin:"5%"}}>TOPSOIL</h5>
                                <p className="card-text">An array of beautifully-coloured river stone in a variety of sizes has now been made available by Goldie Mohr Ltd and Dwyer Pit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Product;