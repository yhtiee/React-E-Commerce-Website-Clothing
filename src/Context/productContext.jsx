import React, { createContext} from "react";
import { useState, useEffect } from "react";

const ProductContext = createContext()

export default ProductContext

export const ProductProvider = ({children}) => {

  
    const addProduct = (event,id, src, alt, description, price) => {
        console.log("submitted")
        console.log(id)

        localStorage.removeItem("product")

        if (!localStorage.getItem("product")){
            localStorage.setItem("product", JSON.stringify({}))
        }
        let product = JSON.parse(localStorage.getItem("product"))
        product = {
            id : id,
            src : src,
            alt : alt,
            description : description,
            price : price
        }
        localStorage.setItem("product", JSON.stringify(product))
        
    }
    
    
    let productContextData = {
        
        addProduct : addProduct,
    
    }


    
    return (
        <ProductContext.Provider value = {productContextData}>
            {children}
        </ProductContext.Provider>
    )

}
