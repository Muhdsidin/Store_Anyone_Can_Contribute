import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Axios } from '../../utils/Inherits';

function Userorder() {
    const [product , setProduct] = useState([])
    const fetchOrders = async()=>{
        const response = await Axios("/user/get-user-orders",{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        console.log(response.data)
        setProduct(response.data.OrderItem)
    }

    useEffect(()=>{fetchOrders()},[])
  return (
    <div>
       <Container>
      <h1 className="text-center my-4">Your Orders</h1>
      <Row>
        {product.map((val)=>(
  <Col  md={4} className="mb-4">
  <Card className="product-card">
    <Card.Img variant="top" src={val.productId.url} />
    <Card.Body>
      <Card.Title className="product-name">Title:{val.productId.title}</Card.Title>
      <Card.Text className="product-description">Discreption{val.productId.discreption}</Card.Text>
      <Card.Text className="product-price">${val.productId.prize}</Card.Text>
    </Card.Body>
  </Card>
</Col>
        ))}
        
      </Row>
    </Container>
    </div>
  )
}

export default Userorder
