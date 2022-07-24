import React from 'react'
import './tiedye.css'
import PR from '../../Assets/display.jpg'
import SH1 from '../../Assets/shirt1.png'
import SH2 from '../../Assets/shirt2.png'
import SH4 from '../../Assets/shirt4.png'
import SH5 from '../../Assets/shirt5.png'
import SH6 from '../../Assets/shirt6.png'
import SH3 from '../../Assets/shirt3.png'




const Tiedye = () => {
  return (
    <section id='tiedye'>
       <div className='container tiedye__container'>
            <h2> Tie-Dye Shirts</h2>
            <div className="tiedye__container-inner">
                <div className="tiedye__image">
                    <img src={PR} alt="" />
                    <a href="/signup" className='btn btn-primary btn-lg' id='button2'> Shop Now </a>
                </div>
                <div className="tiedye__products">
                    <a href="" className="tiedye_product">
                        <img src={SH1} alt="" />
                        <span>
                            <p> Black + Brown Design</p> 
                            <p> ₦3500.00 </p> 
                        </span>
                    </a>
                    <a href="" className="tiedye_product">
                        <img src={SH2} alt="" />
                        <span>
                            <p> Blue + White Design</p> 
                            <p> ₦3500.00 </p>
                        </span>
                    </a>
                     <a href="" className="tiedye_product">
                        <img src={SH3} alt="" />
                        <span> 
                            <p> Multi-Color Design</p> 
                            <p> ₦3500.00 </p>
                        </span>
                    </a>
                     <a href="" className="tiedye_product">
                        <img src={SH4} alt="" />
                        <span> 
                            <p> Multi-Color Design</p> 
                            <p> ₦4000.00 </p>
                        </span>
                    </a>
                     <a href="" className="tiedye_product">
                        <img src={SH5} alt="" />
                        <span> 
                            <p> Multi-Color Design</p> 
                            <p> ₦4000.00 </p>
                        </span>
                    </a>
                     <a href="" className="tiedye_product">
                        <img src={SH6} alt="" />
                        <span> 
                            <p> White + Brown Design</p> 
                            <p> ₦3500.00 </p>
                        </span>
                    </a>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tiedye