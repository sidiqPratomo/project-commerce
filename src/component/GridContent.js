import React from "react";
import classes from "./GridContent.module.css";

function GridContent() {
  return (
    <div className={classes.container}>
      <div className={classes.kiri}>
        <img
          src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          alt="img-left"
        />
      </div>
      <div className={classes.kanan}>
        <div className={classes.object_kanan_container}>
          <div className={classes.object_kanan}>
            <img
              src="https://dynamic.zacdn.com/F_4XaiDKf84cUcNaZOICvqrCGSg=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/lozy-hijab-6498-4184004-1.jpg"
              alt="gamis1"
            />
            <h3>Gamis Istimewa</h3>
          </div>
          <div className={classes.object_kanan}>
            <img
              src="https://akcdn.detik.net.id/visual/2020/03/18/e7ec84a3-646b-4de5-aa10-b4be494c6ec7_11.jpeg?w=480&q=90"
              alt="gamis2"
            />
            <h3>Gamis Istimewa</h3>
          </div>
        </div>
        <div className={classes.object_kanan_container}>
          <div className={classes.object_kanan}>
            <img
              src="https://image.popbela.com/content-images/post/20230308/909492f26fde1aaa693c5f25e746d22a.jpeg?width=1600&format=webp&w=1600"
              alt="gamis3"
            />
            <h3>Gamis Istimewa</h3>
          </div>
          <div className={classes.object_kanan}>
            <img
              src="https://image.makewebeasy.net/makeweb/0/iZPpNuICT/DefaultData/unnamed__7_.jpg?v=202305101549"
              alt="gamis4"
            />
            <h3>Gamis Istimewa</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridContent;
