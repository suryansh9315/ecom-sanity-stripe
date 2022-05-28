import React,{ createContext,useContext,useState,useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({children})=>{
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQty, setTotalQty] = useState(0)
    const [qty, setQty] = useState(1)
    let foundProduct;
    let index;

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

    const onRemove = (product)=>{
        foundProduct = cartItems.find( (e) => e._id === product._id)
        const newCartItems = cartItems.filter( (e) => e._id != product._id);
        setCartItems(newCartItems)
        setTotalPrice((prevPrice)=> prevPrice - foundProduct.price*foundProduct.quantity)
        setTotalQty((prevQty)=> prevQty - foundProduct.quantity)
    }

    const toggleCartItemQuantity = (id,value) => {
        foundProduct = cartItems.find( (e) => e._id === id)
        index = cartItems.findIndex( (e) => e._id === id)
        const newCartItems = cartItems.filter( (e) => e._id != id);

        if(value === 'inc'){
            setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity+1}])
            setTotalPrice((prevPrice)=> prevPrice + foundProduct.price)
            setTotalQty((prevQty)=> prevQty + 1)
        }else if(value === 'dec'){
            if(foundProduct.quantity > 1){
                setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity-1}])
                setTotalPrice((prevPrice)=> prevPrice - foundProduct.price)
                setTotalQty((prevQty)=> prevQty - 1)
            }
        }
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
    const setQtyToOne = ()=>{
        setQty(1)
    }

    return (
        <Context.Provider value={{setTotalQty,setTotalPrice,setCartItems,showCart,setQtyToOne,onRemove,cartItems,totalPrice,totalQty,qty,incQty,decQty,onAdd,setShowCart,toggleCartItemQuantity}}>
            {children}
        </Context.Provider>
    )
}
export const MainContext = ()=>useContext(Context)

