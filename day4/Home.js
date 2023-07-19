import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/back2.jpg";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Crafter's Corner </h1>
          <p> Crafts TO FIT ANY TASTE</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
