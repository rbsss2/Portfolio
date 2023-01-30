import React from "react";

function ProjectSwiper(props) {
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.6/swiper-bundle.css"
      />
      <link rel="stylesheet" type="text/css" href="examples.css" />

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.6/swiper-bundle.min.js"
      ></script>

      <div className="section sec2">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <h1>Section2</h1>
            </div>
            <div className="swiper-slide">
              <h1>Section2</h1>
            </div>
            <div className="swiper-slide">
              <h1>Section2</h1>
            </div>
          </div>
          {/* Add Pagination  */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSwiper;
