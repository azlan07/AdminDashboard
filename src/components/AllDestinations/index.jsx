import React, { useState, useEffect } from "react";
import NavBar from '../LandingPage/navbar';
import { Link } from "react-router-dom";

function AllDestinations() {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch("https://6390373c0bf398c73a805426.mockapi.io/price_list")
            .then((resp) => resp.json())
            .then((data) => setDestinations(data));
    }, []);

    return (
        <div className="container">
          <NavBar />
          <div className="container top">
            <h1 className="text-center mt-2 mb-5">All Destination</h1>
            <div className="row">
              {destinations.map((destination) => {
                return (
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <img src="images/Destination.png" className="card-img-top" />
                      <div className="card-body">
                        <h4>{destination.destinationAirport}</h4>
                        <p>{destination.desc}</p>
                        <Link
                          to={`/detaildst/${destination.id}`}
                          class="btn btn-dark"
                          style={{ width: "250px", marginRight: "15px" }}
                        >
                          View Detail
                        </Link>
      
                        <a href="#" id="wishlist">
                          <img src="images/hati.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
      
}

export default AllDestinations