import React from "react";
import BannerImage from "../assets/back2.jpg";
import "../styles/About.css";
import Navbar from "../components/Navbar";
function About() {
  return (
    <div>
      <Navbar/>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Crafters Corner, your ultimate destination for handcrafted treasures that inspire joy and ignite imagination. We are passionate about connecting you with exquisite, one-of-a-kind crafts that add a touch of beauty and charm to your life.

Crafters Corner is not just an online store; it's a celebration of craftsmanship and creativity. We are a curated marketplace where artisans from around the world showcase their exceptional skills and unique creations. Each item you find here has been carefully crafted with love, attention to detail, and a commitment to excellence.

We believe that the beauty of handmade crafts lies in their ability to tell a story. When you choose a piece from Crafters Corner, you are not just acquiring a product; you are welcoming a piece of artistry into your home. Whether it's a beautifully hand-knit scarf, a meticulously carved wooden sculpture, or an intricately designed piece of jewelry, every item has its own tale to tell.        </p>
      </div>
    </div>
    </div>
  );
}

export default About;