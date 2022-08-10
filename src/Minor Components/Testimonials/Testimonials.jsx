import React, { useRef } from 'react'
import './testimonials.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import {FaArrowLeft} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"


import SC1 from '../../Assets/shirtcarousel1.png'
import SC2 from '../../Assets/shirtcarousel2.png'
import SC3 from '../../Assets/shirtcarousel3.png'
import SC4 from '../../Assets/shirtcarousel4.png'
import SC5 from '../../Assets/shirtcarousel5.png'
import SC6 from '../../Assets/shirtcarousel6.png'



const Testimonials = () => {
  const sliderRef = useRef(null)
  console.log(sliderRef.current)
  const _images = [{
    id: 1,
    src:SC1 ,
    alt: "Image 1",
    name : "Christy",
    testimonial : "'Lovely product designs'"
    
  },
  {
    id: 2,
    src: SC2,
    alt: "Image 2 ",
    name: "Joane",
    testimonial : "'Fell in love with the Tie_Dye shirts that got delivered'"
    
  },
  {
    id: 3,
    src: SC3,
    alt: "Image 3",
    testimonial : "Multi-Color Design"
  },
  {
    id: 4,
    src: SC4,
    alt: "Image 3",
    testimonial : "Multi-Color Design"
  },
  {
    id: 5,
    src: SC5,
    alt: "Image 3",
    testimonial : "Multi-Color Design"
  },
  {
    id: 6,
    src: SC6,
    alt: "Image 3",
    testimonial : "Multi-Color Design"
  }
  ];

  

  return (
    <section id="testimonials">
       <div className="container testimonials_container">
       <div className="testimonials_intro">
          <h2> Reviews </h2>
          <div className="testimonials_navigation">
            <div className="testimonials_prev" onClick={() => sliderRef.current.slickPrev()}>
              <FaArrowLeft/>
            </div>
            <div className="testimonials_next"  onClick={() => sliderRef.current.slickNext()}>
              <FaArrowRight/>
            </div>
          </div>
        </div>
        <div className="testimonial_display">
            <Slider ref={sliderRef} className="slide" slidesToShow={2} slidesToScroll={2} >
              {_images.map((item) => (
                <div key={item.id} className="testimonial_slider">
                  <div className="testimonial_picture">
                    <img src={item.src} alt={item.alt} />
                    <div className="testimonial_text">
                      <p>{item.name}</p>
                      <p>{item.testimonial}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
        </div>
       </div>
    </section>

  )
}

export default Testimonials