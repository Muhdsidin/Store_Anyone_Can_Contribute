import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../../utils/Inherits";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
function ProductDetail() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [data, setData] = useState({});
  console.log(id);
  const fetchDataDetails = async () => {
    const response = await Axios("/product/details", {
      headers: {
        id,
      },
    });
    //console.log(response.data)
    setImages(response.data.images);
    setData(response.data);
  };

  console.log(images);
  console.log(data);

  useEffect(() => {
    fetchDataDetails();
  }, []);

  const AddToCart =async (proId)=>{
    const Token = localStorage.getItem("token")
    console.log(Token)
    console.log(proId)
    const response = await Axios("/user/add-to-cart",{
      method:"POST",
      headers:{
        Authorization : Token
      },
      data:{
        proId
      }
    })
    console.log(response.data)

  }
  return (
    <Container>
      <Row className="mt-4 mb-3">
        <Col>
          <SimpleImageSlider
            width="80%"
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </Col>
      </Row>

      <Row>
        <h2>Name :- {data.title}</h2>

        <br />
        <p>Descreption :- <br /> <span>{data.discreption}</span></p>

        <div>Prize : {data.prize}rs</div><br />
        <div><Link  to={`/order/${data._id}`}><Button className="btn btn-warning" >Buy Now</Button></Link> <Button className="btn btn-warning m-lg-5" onClick={()=> AddToCart(data._id)}>  Add To Cart</Button></div>
      </Row>
    </Container>
  );
}

export default ProductDetail;
