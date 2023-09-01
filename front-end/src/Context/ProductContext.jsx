import { createContext, useEffect, useState } from "react";
import { Axios } from "../utils/Inherits";

export const ProductContext = createContext()

export const ProductProvider = ({ children})=>{
    const [Products , setProducts] = useState([])
    const FetchProduct = async()=>{
        const response = await Axios("product/all-product")
        setProducts(response.data)
    }

    useEffect(()=>{
        FetchProduct()
    },[])
    let name = " sidin"
    return <ProductContext.Provider value={{name , Products ,setProducts}}>{children}</ProductContext.Provider>
}