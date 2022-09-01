import React from 'react'
import { useContext } from 'react'
import ProductContext from '../../Context/productContext'
import "./product_selection.css"

const ProductSelection = () => {
    
    let {src} = useContext(ProductContext)
    let {price} = useContext(ProductContext)
    let {alt} = useContext(ProductContext)
    let {description} = useContext(ProductContext)


  return (
    <section id='selection_page'> 
        <div className="container selection_container">
            <div className="selected_product_wrapper">
              <div className="selected_product">
                <div className="selected_product_display">
                  <img src={src} alt={alt} className='selected_img' />
                </div>

                <div className="selected_product_description">
                  <h3> {description}</h3>
                  <p> {price}</p>
                  <div className="select_product_size">
                    <div className="label_size">
                      Select Size : 
                    </div>
                    <div className="product_sizes">
                      <label> <input type="checkbox" name="size" value="S"/> Small </label> 
                      <label> <input type="checkbox" name="size" value="M"/> Medium </label> 
                      <label> <input type="checkbox" name="size" value="L"/> Large </label> 
                      <label> <input type="checkbox" name="size" value="XL"/> X-Large </label> 
                      <label> <input type="checkbox" name="size" value="XXL"/> XX-Large</label> 
                    </div>
                  </div>
                  <button className="btn btn-primary" id='cart_btn'> Add to Cart</button>
                </div>
              </div>
              <div className="delivery_requirements">
                delivery
              </div>
            </div>
        </div>
    </section>
  )
}

export default ProductSelection