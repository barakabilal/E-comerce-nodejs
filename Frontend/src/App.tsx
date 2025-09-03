import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Home/Home"
import NavBar from "./components/ui/NavBar"
import Privacy from "./pages/Privacy"
import login from "./pages/Login"
import Registration from "./pages/Registration"
import shopepage from "./pages/Shop/Shopepage"
import Footer from "./pages/Home/components/Footer"
import Contactpage from "./pages/contact"
import ProductShowcase from "./pages/ProductShowcase"
import OrderConfirmation from "./pages/orderconfirmation"


function App() {
  return (
 <BrowserRouter>
 <NavBar/>
 <Routes>
  
    <Route path="/" element={Homepage()}/>
    <Route path="/login" element={login()}/>
    <Route path="/registration" element={Registration()}/>
    <Route path="/privacy-policy" element={Privacy()}/>
    <Route path="/Shop" element={shopepage()}/>
    <Route path="/Shop/element" element={ProductShowcase()}/>
    <Route path="/contact" element={Contactpage()}/>
    <Route path="/test" element={OrderConfirmation()}/>

      
 </Routes>
 <Footer/>
 </BrowserRouter>

  )
}

export default App
