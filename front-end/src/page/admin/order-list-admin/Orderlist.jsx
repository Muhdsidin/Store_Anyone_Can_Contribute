import React, { useEffect, useState } from 'react'
import { Axios } from '../../../utils/Inherits'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Orderlist() {
  const [orders , setOrders] = useState([])
  const fetchOrders = async()=>{
    const response = await Axios("/product/admin-order-list",)
    console.log(response.data)
    setOrders(response.data)
  }

  console.log(orders)

  useEffect(()=>{fetchOrders()},[])
  return (
    <Container>
      <h1 className="text-center my-4">Take Orders</h1>
      <Row>
        {orders.map((val, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={val.productId.url} />
              <Card.Body>
                <Card.Title className="product-name">Title: {val.productId.title}</Card.Title>
                <Card.Text className="product-description">Discreption : {val.productId.description}</Card.Text>
                <Card.Text className="product-price">${val.productId.prize}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="user-details">
                  <p className="user-name">username: {val.userId.username}</p>
                  <p className="user-email">Email : {val.userId.Email}</p>
                  <p className="user-email">{val.userId.address}</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Orderlist
