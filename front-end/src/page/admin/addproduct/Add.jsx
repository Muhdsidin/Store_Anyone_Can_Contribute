import { Container, Form, Row } from "react-bootstrap/";
import Button from "react-bootstrap/Button";
import { FaCartPlus, FaUpload } from "react-icons/fa";
import "./Add.css";
import { useState } from "react";
import axios from "axios"
import { Axios } from "../../../utils/Inherits";

export const Add = () => {
    const [title, setTitle] = useState("")
    const [prize, setPrize] = useState("")
    const [Dis, setDis] = useState("")

    const [image , setImage] = useState('')
    const [imagetwo , setImageTwo] = useState('')
    const HandleFile = (event)=>{
      setImage(event.target.files[0])
      
    }

    const HandleFileTwo = (event)=>{
      setImageTwo(event.target.files[0])
    }
console.log(image)
console.log(imagetwo)
    const HandleTitle = (event)=>{
        setTitle(event.target.value)
        console.log(title)
    }

    const HandlePrize = (event)=>{
        setPrize(event.target.value)
        console.log(prize)
    }

    const HandleDis = (event)=>{
        setDis(event.target.value)
        console.log(Dis)
    }

    const HandleForm = async(event)=>{
      event.preventDefault()
    }

    const upload = async()=>{
      
        const formdata = new FormData()
        formdata.append("file", image) 
        formdata.append("file", imagetwo) 
        formdata.append("title" , title)
        formdata.append("dis" ,Dis)
        formdata.append("prize" ,prize)
        const response = await Axios("/product/upload",{
          method:"POST",
          data: formdata,
          headers : {
            "Content-Type":"multipart/form-data"
          },
        })
        console.log(response.data)

    }
  return (
    <Container className="mt-5">
      <Form className="mt-3" style={{ marginLeft: "100px", width: "60%" }} onSubmit={HandleForm}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Product Title</Form.Label>
          <Form.Control type="text" placeholder="Please enter Product Title" onChange={HandleTitle}/>
          <Form.Text className="text-muted">
            we are admin dont share password/email of admin page
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicprize">
          <Form.Label>Product Prize</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Prize" onChange={HandlePrize} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDis">
          <div className="form-group">
            <label >Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter the Product Discreption"
              onChange={HandleDis}
            ></textarea>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDis">
          <div className="mb-3">
            <label  className="form-label">
              Default file input example
            </label>
            <input className="form-control" type="file" id="formFile" onChange={HandleFile} />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDis">
          <div className="mb-3">
            <label  className="form-label">
              Default file input example
            </label>
            <input className="form-control" type="file" id="formFile" onChange={HandleFileTwo} />
          </div>
        </Form.Group>
        <Button variant="dark" type="submit" className="btn1" onClick={upload}>
          <FaUpload />
        </Button>
      </Form>
    </Container>
  );
};
