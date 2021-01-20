import React from "react"
import Slider from "react-slick"
import { Typography } from "@material-ui/core"

export const ReactSlider = ({ carousels = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnHover: true,
    easing: "linear",
    swipe: true,
  }
  return (
    <Slider {...settings}>
      {carousels.map((caro, index) => (
        <div key={index}>
          <img
            className="d-block img-fluid "
            src={caro.pic}
            srcSet={`${caro.picSm} 300w,${caro.picMd} 600w,${caro.pic}  803w`}
            alt={caro.caption}
          />
          <div className="carousel-caption d-none d-md-block">
            <Typography
              style={{ color: "white", background: "purple", width: "100%" }}
              className="text-shadow text-black "
              variant="h6"
            >
              {caro.caption}{" "}
            </Typography>
          </div>
        </div>
      ))}
    </Slider>
  )
}
