import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import './shirtcarousel.css'

const Shirtcarousel = ({images}) => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500
  };
  return (

    <section id='carousel'>
        <div className='container carousel__container'>
            <div className="tag">
                <h2>Most Popular Shirts</h2>
            </div>
            <div className="imgslider">
                <Slider {...settings} className="slide">
                  {images.map((item) => (
                      <button key={item.id} className='carousel__image'> 
                            <a href="/products">
                              <img src={item.src}  alt={item.alt} />
                              <span> 
                                  <p>{item.description}</p>
                                  <p>{item.price}</p>
                              </span> 
                            </a> 
                      </button>      
                ))}
                </Slider>
            </div>
        </div>
    </section>         

  )
}


export default Shirtcarousel