import React from 'react'
import './tiedye.css'
import PR from '../../Assets/display.jpg'
import SH1 from '../../Assets/shirt1.png'
import SH2 from '../../Assets/shirt2.png'




const Tiedye = ({tiedye_images}) => {
  return (
    <section id='tiedye'>
       <div className='container tiedye__container'>
            <h2> Tie-Dye Shirts</h2>
            <h3> Tie-Dye Shirts designed in all sizes and for all genders!! </h3>
            <div className="tiedye__container-inner">
                <div className="tiedye__image">
                   <a href="" className='tiedye_display'>
                        <img src={PR} alt="" />
                   </a>
                </div>
                <div className="tiedye__products">
                   {tiedye_images.map((item) =>(
                       <a href='/products'  key={item.id} className="tiedye_product">
                        <img src={item.src} alt={item.alt} />
                        <span>
                            <p>{item.description}</p> 
                           <p>{item.price} </p>  
                        </span>
                    </a>
                   ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tiedye