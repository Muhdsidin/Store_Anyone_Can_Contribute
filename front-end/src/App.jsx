import { Header } from "./Basic/Header/Header"
import Home from "./page/Home/Home"
import {  Route, Routes } from "react-router-dom";
import { Add } from "./page/admin/addproduct/Add";
import { Footer } from "./Basic/Footer/Footer";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import { Cart } from "./page/cart/Cart";
import { ProtectCart } from "./ProtectedRoutes/ProtectCart";
import ProductDetail from "./page/ProductDetailPage/ProductDetail";
import Adminview from "./page/admin/admin-view/Adminview";
import UserControl from "./page/admin/user-control/UserControl";
import Adduser from "./page/admin/add-user/Adduser";
import { ProtectLogin } from "./ProtectedRoutes/ProtectLogin";
import Order from "./page/order-page/Order";
import Orderlist from "./page/admin/order-list-admin/Orderlist";
import Userorder from "./page/user-order-list/Userorder";


function App() {
  

  return (
    <>
      
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Adminview />} />
        <Route path="/admin/orders" element={<Orderlist />} />
        <Route path="/admin-add" element={<Add />} />
        <Route path="/admin/user-control" element={< UserControl />} />
        <Route path="/admin/user-control/add-user" element={< Adduser />} />
        
        <Route element={<ProtectLogin />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Route>



        <Route  element={<ProtectCart />} >
        <Route path="/cart" element={<Cart />} />
        <Route path="/view-list/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/orders" element={<Userorder />} />
        </Route>




      </Routes>
      <Footer />
 
    </>
  )
}

export default App
