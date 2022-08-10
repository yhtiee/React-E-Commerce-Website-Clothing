import React from 'react'
import './hoddies.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Hoddies = ({hoodies__carousel}) => {
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
    <section id='hoodies'>
    <div className="container hoodies__container">
        <div className="hoodies__images">
            <div className="tag">
                <h2>Tie-Dye Hoodies </h2>
                <h3>Shop Tie-Dye Designed Hoodies for the Winter</h3>
            </div>
            <div className="hoodies__image">
                <a href="" className='hoodie_image1'>
                    <a href="/signup" className='btn btn-primary btn-lg' id='btn'> Shop </a>
                </a>
                <a href="" className='hoodie_image2'>
                    <a href="/signup" className='btn btn-primary btn-lg' id='btn'> Shop </a>

                </a>
                <a href="" className='hoodie_image3'>
                    <a href="/signup" className='btn btn-primary btn-lg' id='btn'> Shop </a>
                
                </a>
            </div>
        </div>
        <div className="hoodie__carousel">
            <div className="tag">
                <h2>Tote bags, Croptops and Buckethats</h2>
            </div>
            <div>
            <Slider {...settings} className="slide">
              {hoodies__carousel.map((item) => (
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
    </div>
</section>
  )
}

export default Hoddies