import React,{ createContext,useContext,useState,useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({children})=>{
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalQty, setTotalQty] = useState()
    const [qty, setQty] = useState(1)

    const onAdd = (product,quantity)=>{
        const checkProductinCart = cartItems.find((item)=>item._id===product._id)
        setTotalPrice((prevPrice)=>prevPrice + product.price*quantity)
        setTotalQty((prevTotalQty)=>prevTotalQty+quantity)

        if(checkProductinCart){
            const updatedCartItems = cartItems.map((item)=>{
                if(item._id === product._id){
                    return {...item,quantity:item.quantity+quantity}
                }
            }) 
            setCartItems(updatedCartItems)
        }else{
            product.quantity = quantity;
            setCartItems([...cartItems,{...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart.`)
    }

    const incQty = ()=>{
        setQty((prevQty) => prevQty+1)
    }
    const decQty = ()=>{
        setQty((prevQty)=>{
            if (prevQty -1 < 1) {
                return 1;
            }
            return prevQty - 1
        })
    }

    return (
        <Context.Provider value={{showCart,cartItems,totalPrice,totalQty,qty,incQty,decQty,onAdd,setShowCart}}>
            {children}
        </Context.Provider>
    )
}
export const MainContext = ()=>useContext(Context)

