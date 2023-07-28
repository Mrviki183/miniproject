import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/back2.jpg";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Home() {

  const navigate=useNavigate();
    const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const handlechange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  }
  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h2 className="redex">Welcome User: {username}</h2>
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
