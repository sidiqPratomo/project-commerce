import React from "react";
import classes from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
// import hero from "../source/hero.png";

function Hero() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/auth");
  };
  return (
    <div className={classes.container}>
      <div className={classes.judul_container}>
        <div className={classes.judul}>
          <h5>NEW FASHION</h5>
          <h1>Arizitia</h1>
          <h1>New Collection</h1>
          <p>Look at the sunset, life is amazing, life is beautiful, life what you make it</p>
          <div>
            <button onClick={navigateHandler}>DISCOVER NOW</button>
          </div>
        </div>
      </div>
      {/* <div className={classes.hero_image}>
        <img src={hero} alt="hero img" />
      </div> */}
    </div>
  );
}

export default Hero;
