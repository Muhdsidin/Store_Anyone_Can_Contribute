import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAmazon,FaBeer, FaCartPlus, FaProductHunt } from "react-icons/fa";
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Header(){


    const images = [
        { url: "http://res.cloudinary.com/desvgqarv/image/upload/v1688799728/Products-img/xlridavdjqoilcf8oghm.jpg" },
        { urlone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" },
        { url: "ihttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBa2yAcc41-Vh4jN57meZBKg_hBxANSdqeZn_qgLXXA-9DU-e6L8uf7a2zDULBZCdJ1Kg&usqp=CAU" },
      ];

      const Logout = ()=>{
        localStorage.clear()
      }
      const token = localStorage.getItem("token")

    return(<>
           <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaAmazon className="mr-2" />
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Amazon</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto align-items-center">
            {token ? (
              <li className="nav-item">
                <span className="nav-link nav-link-text" onClick={Logout}>
                  Logout
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link nav-link-text">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/cart" className="nav-link nav-link-icon">
                <FaCartPlus className="mr-1" />
                <span className="nav-link-text">Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link nav-link-icon">
                <FaProductHunt className="mr-1" />
                <span className="nav-link-text">Orders</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={-1} className="nav-link nav-link-btn">
                <Button variant="outline-light">Back</Button>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>      </>
    )
}
