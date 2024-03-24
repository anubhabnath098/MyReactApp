import React from "react";
import "../styles.css";
function FrontPage() {
  return (
    <div className="image_container">
      <img
        src="https://wwd.com/wp-content/uploads/2022/07/Nat-Geo-Lifestyle_Landscape-4.png"
        alt="front_page.png"
        className="image"
      />
      <h1 className="front_head">
        Explore from the best collection of Sneakers at our store
      </h1>
    </div>
  );
}

export default FrontPage;
