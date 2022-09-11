import React, { createContext} from "react";
import { useEffect } from "react";
import { useState } from "react";

const CartContext = createContext()

export default CartContext

export const CartProvider = ({children}) => {

    let [cart, setCart] = useState([])
    let [cartlength, setCartLength] = useState(0)
    let [totalPriceFinal, setTotal] = useState(0)
    let [cartQuantity, setQuantity] = useState(1)
    
    
    


    let localCart = localStorage.getItem("cart")

    const addItem = (event, id, src, alt, description, price, size) => {
        
        let item = {
            id : id,
            src : src,
            alt : alt,
            description : description,
            price : price,
            size : size,
            quantity : 1
        }

        //  creating a copy of our cart state
        let cartCopy = [...cart]

        //  look for cartitem in the cart array
        let existingItem = cartCopy.find(cartItem => cartItem.size === size && cartItem.id === id )

        //  if item already exist
        if (existingItem){
            existingItem.quantity += item.quantity // update the item
            existingItem.price += item.price
            
        }
        else{
            cartCopy.push(item)  // if it dosent just add
        }

        setCart(cartCopy)

        localStorage.setItem("cart", JSON.stringify(cartCopy))

        localStorage.setItem("Price", JSON.stringify(price))

        
        
        accessCart()
        getCartLength()
        totalPrice() 
        getPriceTotal()
        
        
       
    }

    
    const removeItem = (event, size, price) => {
        //create cartCopy
        let cartCopy = [...cart]
        
        cartCopy = cartCopy.filter(item => item.size !== size);
        
        //update state and local
        setCart(cartCopy);
        
        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)

        let priceTotal = JSON.parse(localStorage.getItem("totalPrice"))
        let val = priceTotal - price
        setTotal(val)
        localStorage.setItem("totalPrice", JSON.stringify(val))
        pageReload()
        

    }
    
    let pageReload = () => {
        let cartItems = JSON.parse(localStorage.getItem("cart"))
        if (cartItems.length === 0){
          removeCart()
        }
      }

    useEffect(() => {

        let localCartjs = JSON.parse(localCart)

        if (localCartjs){
            setCart(localCartjs)
        }

    }, [])

    let accessCart = () => {

        let cartItems = JSON.parse(localStorage.getItem("cart"))
        let total = 0;
        for (let i in cartItems) {
            total++;
        }
        let cartLength = total
        localStorage.setItem("cartlength", JSON.stringify(cartLength))
        
    }

    let getCartLength = () => {

        let cartLengthGet = JSON.parse(localStorage.getItem("cartlength"))
        let len = cartLengthGet
        setCartLength(len)
        
    }

    let totalPrice = () => {
        let cartTotal = JSON.parse(localStorage.getItem("cart"))

        let prices = []
        for (let item of cartTotal){
            let mainPrice = item.price
            prices.push(mainPrice)
        }

        const sum = prices.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0)
        
        let finalSum = sum
        console.log(finalSum)
        
        localStorage.setItem("totalPrice", JSON.stringify(finalSum))
        
    }
    
    let getPriceTotal = () => {
        
        let cartPrice = JSON.parse(localStorage.getItem("totalPrice"))
        setTotal(cartPrice)
          
    }

    let increase = (event, size, id, quantity, price, description, src , alt) => {
        let cartCopy = [...cart]

        let item = {
            id : id,
            src : src,
            alt : alt,
            description : description,
            price : price,
            size : size,
            quantity : 1
        }

        let existingItem = cartCopy.find(item => item.size === size && item.id === id )
        if (existingItem){
            existingItem.quantity = quantity +1
            setQuantity(existingItem.quantity)
            let val = JSON.parse(localStorage.getItem("Price"))
            existingItem.price = val += price
            
        }
        
        
        getPriceTotal()
        
        setCart(cartCopy)

        localStorage.setItem("cart", JSON.stringify(cartCopy))

        let cartTotal = JSON.parse(localStorage.getItem("cart"))

        let prices = []
        for (let item of cartTotal){
            let mainPrice = item.price
            prices.push(mainPrice)
        }

        const sum = prices.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0)
        
        let finalSum = sum
        console.log(finalSum)
        setTotal(finalSum)
        localStorage.setItem("totalPrice", JSON.stringify(finalSum))
        
    }

    useEffect(() => {
        accessCart()
        getCartLength() 
        getPriceTotal()
        
    
    }, [])

    let removeCart = ()=> {
        localStorage.removeItem("cart")
        localStorage.removeItem("totalPrice")
        window.location.reload()
    
      }


    let cartData = {

        addItem : addItem,
        cartlength : cartlength,
        totalPriceFinal : totalPriceFinal,
        removeCart : removeCart,
        removeItem : removeItem,
        increase : increase
        
        
    }
    

    return(
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>
    )

}