import React, { createContext} from "react";
import { useState } from "react";

const ProductContext = createContext()

export default ProductContext

export const ProductProvider = ({children}) => {

    // let [src, setSrc] = useState(null)
    // let [price, setPrice] = useState(null)


   
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

    
    let product = JSON.parse(localStorage.getItem("product"))
    let src = product.src
    let price = product.price
    

    let productContextData = {
        addProduct : addProduct,
        src : src,
        price : price
    }











    return (
        <ProductContext.Provider value = {productContextData}>
            {children}
        </ProductContext.Provider>
    )

}
