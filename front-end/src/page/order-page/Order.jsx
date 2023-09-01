import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Order.css"
import { Container } from "react-bootstrap";
import { Axios } from "../../utils/Inherits";

function Order() {
  const [product , setProduct] = useState([])
  const [payment , setPayment] = useState("")
    const { id } = useParams();
  console.log(id);

  const fetchProduct = async()=>{
    const response = await Axios("/product/get-order-product",{
        headers:{
            Authorization: localStorage.getItem("token"),
            id
        },
        
    })
    console.log(response.data)
    setProduct(response.data)
  }

  const orderSumbit = async()=>{
    const response = await Axios("/user/conform-order",{
      method:"POST",
      headers:{
        Authorization:localStorage.getItem("token")
      },
      data:{
        proId:id,
        payment
      }
    })
    console.log(response.data)
  }

  const handlePayment = (ev)=>{
    console.log(ev.target.value)
    setPayment(ev.target.value)
  }

  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <Container>
    <div className="order-container">
      <img
        className="product-image"
        src={product.url}
        alt="Product Image"
      />
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">
        {product.discreption}
      </p>
      <p className="product-price">{product.prize}rs</p>
      <p>Select Payment Option:</p>
      <div className="payment-options">
        <label htmlFor="rad">
        <div className="payment-option" id="cashOnDelivery" >
          Cash On Delivery <input type="radio" id="rad" value="COD" onChange={handlePayment} />
        </div>
        </label>
      </div>
      <button className="order-button" id="orderButton" onClick={orderSumbit}>
        Place Order
      </button>
    </div>
    </Container>
  );
}

export default Order;
