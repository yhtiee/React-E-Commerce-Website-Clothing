import React from 'react'
import { Link } from 'react-router-dom'
import './products.css'
import generalLists from '../../Product Lists/generalLists'
import { useContext } from 'react'
import ProductContext from '../../Context/productContext'

const Products = () => {

  let {addProduct} = useContext(ProductContext)

  // const showDetails = (event, id, src, alt, description, price) => {
  //   // console.log(event.target)
  //   console.log(id)
  //   console.log(src)
  //   console.log(alt)
  //   console.log(description)
  //   console.log(price)
  // }
  return (
    <section id="products_page">
            <div className="container products_container">
                <div className="products_list">
                  <ul className='products_list_display'>
                    <li><Link to="/Tie-Dye_Shirts" className='product_link'> Tie-Dye Shirts</Link></li>
                    <li><Link  to="/Tie-Dye_Hoddies" className='product_link'> Tie-Dye Hoddies</Link></li>
                    <li><Link  to="/Tie-Dye_Kids" className='product_link'> Tie-Dye Kids</Link></li>
                    <li><Link  to="/Tie-Dye_Couples" className='product_link'> Tie-Dye Couples</Link></li>
                    <li><Link  to="/Plain-Tee_Shirts" className='product_link'> Plain-Tee Shirts</Link></li>
                    <li id='product_links'><Link  to="./Tie-Dye_Totebags" className='product_link'> Tie-Dye Totebags, Buckethats and Croptops</Link></li>
                  </ul>
                </div>
                <div className="all_products">
                {generalLists.map((item, key) => (
                  <button key={item.id} className='products_pictures' onClick={event => addProduct(event, item.id, item.src, item.alt, item.description, item.price)}> 
                        <a href="/product_selection">
                          <div className='product_img_background'> <img className='product_img' src={item.src}  alt={item.alt} /></div>
                          <span className='product_description'> 
                              <p className='p1'>{item.description}</p>
                              <p className='p2'>{item.price}</p>
                          </span> 
                        </a> 
                  </button>    
            ))}
                </div>
            </div>
    </section>
  )
}

export default Products