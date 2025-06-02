import { createContext, useContext, useEffect, useState } from "react";

const CartContext=createContext()

export const useCart =()=>useContext(CartContext)

export const CartPovider = ({children})=>{

    const [cartItems,setCartItems]=useState([])

    const [grandtotal,setgrandtotal]=useState(0)
    
    useEffect(()=>{
        const storeCartitems=JSON.parse(localStorage.getItem("cartItems"))
        if(storeCartitems){
            console.log("cartItems..",cartItems)
            setCartItems(storeCartitems)
        }
    },[])
    
    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems])

    const updateLocalStorage = (items)=>{
        localStorage.setItem('cartItems',JSON.stringify(items))
    }

    const addItemToCart=(item)=>{
      const updatCartItems=[...cartItems,item]
      setCartItems(updatCartItems)
      console.log('updatCartItems',updatCartItems)
      updateLocalStorage(updatCartItems);
    }

    const removeItemFromCart = (id) =>{
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        console.log("updatedCartItems", updatedCartItems);
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems)
    }

    useEffect(()=>{
        let total=0;
        cartItems.map((items)=>{
          total += items.price
        });
        setgrandtotal(total)
        console.log("Grand Total", grandtotal)

    },[cartItems])

    return(
        <CartContext.Provider value={{cartItems, grandtotal, addItemToCart, removeItemFromCart }}>
       {children}
        </CartContext.Provider>
    )

}

