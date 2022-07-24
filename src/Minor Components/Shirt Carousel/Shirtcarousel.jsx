import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import './shirtcarousel.css'

const Shirtcarousel = ({images}) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
  return (

    <section id='carousel'>
        <div className='container carousel__container'>
            <div className="tag">
                <h2>Featured Shirts</h2>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                {images.map((item) => (
                    <a href="" key={item.id} className='carousel__image'> 
                        <img src={item.src}  alt={item.alt} />
                        <span> 
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </span>  
                    </a>
                ))}
                </Slider>
            </div>
        </div>
    </section>         

  )
}


export default Shirtcarousel