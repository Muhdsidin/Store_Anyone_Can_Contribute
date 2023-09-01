import { Button, Col, Container, Row } from "react-bootstrap"
import { Axios } from "../../utils/Inherits"
import { useEffect, useState } from "react"
import { FaCartPlus, FaTrash } from "react-icons/fa";

export const Cart = ()=>{
    const [cartitem , setItem] = useState([])
    const fetchCart =async ()=>{
        const Token = localStorage.getItem("token")
        const response = await Axios("/user/get-cart-item",{
            method:"GET",
            headers:{
                Authorization:Token
            }
        })
        console.log(response.data.cart)
        setItem(response.data.cart)
    }
    useEffect(()=>{
        fetchCart()
    },[])
    console.log(cartitem)

  async function  DeleteCartItem(proId){
    console.log(proId)
    const response = await Axios("/user/remove-cart-item",{
        method:"POST",
        headers:{
            Authorization: localStorage.getItem("token")
        },
        data:{
            proId
        }
    })
    console.log(response.data)
    setItem(response.data.cart)
  }

    return (
        <>
        <Container>
        <table>
  <tr>
    <th>title</th>
    <th>discreption</th>
    <th>prize</th>
    <th>Image</th>
  </tr>

  {cartitem.map((val)=>(
  <tr key={val._id}>
  <td>{val.productId.title}</td>
  <td>{val.productId.discreption}</td>
  <td>{val.productId.prize}</td>
  
  <td><img src={val.productId.url} alt="" style={{width: "30px" , height:"30px"}} /></td>
  <td><Button className="btn btn-danger" onClick={()=> DeleteCartItem(val._id)}> <FaTrash ></FaTrash>Remove</Button></td>
</tr>
  ))}
    
          

   

</table>
        </Container>
        </>
    )
}