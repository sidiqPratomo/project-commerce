import React from "react";
import classes from "./MainContent.module.css";

function MainContent() {
  return (
    <div className={classes.container}>
      <div className={classes.kiri}>
        <div className={classes.konten}>
          <h3>HAT - HANDBAG - SHOES - EYEWEAR</h3>
          <h1>Accessories for her</h1>
          <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
          <div>
            <button className={classes.btn}>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className={classes.kanan}>
        <img src="https://pbs.twimg.com/media/DapBEuMVQAAP44V?format=jpg&name=900x900" alt="gambar-kanan" />
      </div>
    </div>
  );
}

export default MainContent;
