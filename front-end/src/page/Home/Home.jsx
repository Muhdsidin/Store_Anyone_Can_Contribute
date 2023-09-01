import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap/";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCartPlus } from "react-icons/fa";
import "./Home.css"
import axios from "axios";
import { Axios } from "../../utils/Inherits";
import { ProductContext } from "../../Context/ProductContext";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";

function Home() {

  const [sixdata , setSixData] = useState([])
  const [tweproduct , setTweproduct] = useState([])
  const { Products} = useContext(ProductContext)

  const images = [
 "https://media.istockphoto.com/id/529662428/photo/male-hand-holding-tv-remote-control.webp?b=1&s=170667a&w=0&k=20&c=INpXmqOjUpqZU2xmbsOHSxszDpL1wTPMMGTmXfg8kYw=" ,
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" ,
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" ,
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" ,
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" ,
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXoF5ZFk4qQPa_gcx96MyRFkfMpeqaDksmA&usqp=CAU"
  ];
  //console.log(name)
  console.log(Products)
  const FetchTweProduct = async()=>{
     
      const response = await Axios("/product/get-data/12")
      //console.log(response.data)
      setTweproduct(response.data)
  }
  const FetchSixProduct = async()=>{
    const response = await Axios("product/get-data/6")
   // console.log(response.data)
    setSixData(response.data)
  }





  useEffect(()=>{
    FetchTweProduct()
    FetchSixProduct()
  },[])

  return (
    <>
    <SimpleImageSlider
        width="100%"
        height={580}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", backgroundPosition:"contain" }}
      />




    <Container className="mt-5">
      <Row className="mt-3">
        {sixdata.map((val)=>(
          <Card style={{ width: "15rem" , height:"425px", margin:"20px"}} className="shadow-lg p-3 mb-5 bg-white rounded" key={val._id}>
          <Card.Img variant="top mt-4"  src={val.url}  style={{width:"100%", height:"170px"}}/>
          <Card.Body>
            <Card.Title>{val.title}</Card.Title>
            <Card.Text>
                 {val.discreption}
                </Card.Text>
                <Card.Text>
             prize : {val.prize}rs
            </Card.Text>
                <Link to={`/view-list/${val._id}`} ><Button variant="success mb-3"> <FaCartPlus size="22px" /> </Button></Link>
          </Card.Body>
        </Card>
        ))}       
      </Row>
    </Container>

    <section>
        <div className="div-one">
          {sixdata.map((img)=>(
            <div className="img" key={img._id}>
           <img src={img.url} alt="" style={{width:"100%", height:"100%"}}/>
         </div>
         ))}
        </div>
    </section>

    <section>
             <Container className="mt-3"><h2>Under 1000rs Products</h2></Container>
        <Container className="mt-5">
          <Row className="mt-3">
        {tweproduct.map((val)=>(
              <Card style={{ width: "15rem" , height:"425px", margin:"20px"}} className="shadow-lg p-3 mb-5 bg-white rounded" key={val._id}>
              <Card.Img variant="top mt-4"  src={val.url}  style={{width:"100%", height:"170px"}}/>
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>
                 {val.discreption}
                </Card.Text>
                <Card.Text>
             prize : {val.prize}rs
            </Card.Text>
                <Link to={`/view-list/${val._id}`} ><Button variant="success mb-3"> <FaCartPlus size="22px" /> </Button></Link>
              </Card.Body>
            </Card>
            ))}
            </Row>
        </Container>
        </section>

        <section>
        <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
        </section>
       

        <section>
        <Container className="mt-5">
          <Row className="mt-3">
        {Products.map((val)=>(
          <Card style={{ width: "15rem" , height:"425px", margin:"20px"}} className="shadow-lg p-3 mb-5 bg-white rounded" key={val._id}>
          <Card.Img variant="top mt-4"  src={val.url}  style={{width:"100%", height:"170px"}}/>
          <Card.Body>
            <Card.Title>{val.title}</Card.Title>
            <Card.Text>
             {val.discreption}
            </Card.Text>
            <Card.Text>
             prize : {val.prize}rs
            </Card.Text>
            <Link to={`/view-list/${val._id}`} ><Button variant="success mb-3"> <FaCartPlus size="22px" /> </Button></Link>
          </Card.Body>
        </Card>
        ))}
         </Row>
        </Container>
        </section>
 

    </>
  );
}

export default Home;
