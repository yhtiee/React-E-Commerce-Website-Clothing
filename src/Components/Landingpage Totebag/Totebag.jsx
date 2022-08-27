import React from 'react'
import "./totebag.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import TB from '../../Assets/totebagcombo1.jpg'
import TB1 from '../../Assets/totebagcombo2.jpg'
import TB2 from '../../Assets/totebagcombo3.jpg'
import TB3 from '../../Assets/totebagcombo4.jpg'



const Totebag = ({combo}) => {
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
    <section id='popular-combos'>
        <div className="container popular-combo__container">
            <div className="popular-combo__images">
                <div className="tag">
                    <h2>Popular Combinations</h2>
                    <h3> Shop Popular Combinations Of our Tie-Dye Tote-bags, Croptops and Bucket-hats </h3>
                </div>
                <div className="popularcombo__image">
                    <a href="" className='combo_image1'>
                        <a href="/signup" className='btn btn-primary btn-lg' id='btn'> Shop </a>
                    </a>
                    <a href="" className='combo_image2'>
                        <a href="/signup" className='btn btn-primary btn-lg' id='btn'> Shop </a>
  
                    </a>
                    <a href="" className='combo_image3'>
                        <a href="/signup" className='btn btn-primary btn-lg' id='btn'> Shop </a>
                    
                    </a>
                </div>
            </div>
            <div className="popular-combo__carousel">
                <div className="tag">
                    <h2>Tote bags, Croptops and Buckethats</h2>
                </div>
                <div>
                <Slider {...settings} className="slide">
                  {combo.map((item) => (
                      <button key={item.id} className='carousel__image'> 
                            <a href="/product_selection">
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

export default Totebag