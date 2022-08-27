import React from 'react'
import { useContext } from 'react'
import ProductContext from '../../Context/productContext'
import "./product_selection.css"

const ProductSelection = () => {
    
    let {src} = useContext(ProductContext)
    let {price} = useContext(ProductContext)


  return (
    <section id='selection_page'> 
        <div className="container selection_container">
            <img src={src} alt="hi" />
            <p> wellcome {price}</p>
        </div>
    </section>
  )
}

export default ProductSelection