import React from "react";

import { Carousel, ImgWrap } from "./ImgSlider.styled";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <ImgWrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </ImgWrap>
      <ImgWrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </ImgWrap>
      <ImgWrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </ImgWrap>
      <ImgWrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </ImgWrap>
    </Carousel>
  );
}

export default ImgSlider;
