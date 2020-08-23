import React from "react"
import $ from "jquery"

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.handleCarousel = this.handleCarousel.bind(this)
  }

  handleCarousel() {
    $(".carousel").carousel({
      interval: 5000,
      pause: false,
      wrap: true,
    })
  }
  render() {
    const { carosel } = this.props
    return (
      <div
        id="carouselExampleIndicators"
        onLoad={this.handleCarousel}
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          {carosel.map((caro, i) => (
            <Carosel key={i} {...caro} />
          ))}
        </div>

        <a
          className="carousel-control-prev "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}
export default Carousel

const Carosel = ({ pic, picMd, picSm, caption, active }) => (
  <div className={active ? "carousel-item active " : "carousel-item"}>
    <img
      className="d-block img-fluid "
      src={pic}
      srcSet={`${picSm} 300w,${picMd} 600w,${pic}  803w`}
      alt={caption}
    />
    <div className="carousel-caption d-none d-md-block">
      <h3 className="text-shadow ">{caption} </h3>
    </div>
  </div>
)
