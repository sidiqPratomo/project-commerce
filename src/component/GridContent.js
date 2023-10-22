import React from "react";
import classes from "./GridContent.module.css";

function GridContent() {
  return (
    <div className={classes.container}>
      <div className={classes.kiri}>
        <img src="https://i.imgur.com/MbjelFY.jpg" alt="img-left" />
      </div>
      <div className={classes.kanan}>
        <div className={classes.object_kanan_container}>
          <div className={classes.object_kanan}>
            <div className={classes.content}>
              <h3>Recommend For You</h3>
              <h2>Lite Basic Dress</h2>
              <div>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div className={classes.object_kanan}>
            <img
              src="https://dynamic.zacdn.com/F_4XaiDKf84cUcNaZOICvqrCGSg=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/lozy-hijab-6498-4184004-1.jpg"
              alt="gamis1"
            />
          </div>
        </div>
        <div className={classes.object_kanan_container}>
          <div className={classes.object_kanan}>
            <img
              src="https://image.popbela.com/content-images/post/20230308/909492f26fde1aaa693c5f25e746d22a.jpeg?width=1600&format=webp&w=1600"
              alt="gamis3"
            />
          </div>
          <div className={classes.object_kanan}>
            <img
              src="https://image.makewebeasy.net/makeweb/0/iZPpNuICT/DefaultData/unnamed__7_.jpg?v=202305101549"
              alt="gamis4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridContent;
