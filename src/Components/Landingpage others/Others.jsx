import React from 'react'
import './others.css'

const Others = () => {
  return (
    <section id='others'>
        <div className="container others_container">
            <div className="others__images">
                <div className="tag">
                    <h2>Other Deals</h2>
                </div>
                <div className="others__image">
                   <div className='other_wraper'>
                        <a href="" className='other_image1'></a>
                        <p> Shop Kids Tie-Dye Clothing</p>
                   </div>

                   <div  className='other_wraper'>
                        <a href="" className='other_image2'></a>
                        <p> Shop For Couples </p>
                   </div>

                    <div  className='other_wraper'>
                        <a href="" className='other_image3'></a>
                        <p> Shop Plain-Tees that Fit</p>
                    </div>
                </div>
            </div>    
        </div>    
    </section>
  )
}

export default Others
