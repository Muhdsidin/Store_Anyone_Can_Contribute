import React, { useContext } from 'react'
import { ProductContext } from '../../../Context/ProductContext'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { Axios } from '../../../utils/Inherits'

function Adminview() {
    const {Products ,setProducts} = useContext(ProductContext)
    console.log(Products)
    const DeleteProduct = async(ProId)=>{
      console.log(ProId)
      const response = await Axios('product/delete-product',{
        method: "DELETE",
        data:{
          ProId
        }
        
      })
      setProducts(response.data)
    }
  return (
    <div>
      <div style={{
        display:"flex"
      }}>
        <h4><Link to="/admin/user-control"><Button className='btn btn-dark m-3'>User Control</Button></Link></h4>
        <h4><Link to="/admin-add"><Button className='btn btn-dark m-3'>Add Products</Button></Link></h4>
        <h4><Link to="/admin/orders"><Button className='btn btn-dark m-3'>Orders</Button></Link></h4>
        </div>
       <section>
        <Container className="mt-5">
          <Row className="mt-3">
        {Products.map((val)=>(
          <Card style={{ width: "15rem" , height:"490px", margin:"20px"}} className="shadow-lg p-3 mb-5 bg-white rounded" key={val._id}>
          <Card.Img variant="top mt-4"  src={val.url}  style={{width:"100%", height:"170px"}}/>
          <Card.Body>
            <Card.Title>{val.title}</Card.Title>
            <Card.Text>
             {val.discreption}
            </Card.Text>
            <Link to={`/view-list/${val._id}`} ><Button variant="success mb-3"> View</Button></Link> <br />
            
          </Card.Body>
          <Button className='btn btn-danger' onClick={()=> DeleteProduct(val._id) }>Delete</Button>
        
        </Card>
        ))}
         </Row>
        </Container>
        </section>
    </div>
  )
}

export default Adminview
