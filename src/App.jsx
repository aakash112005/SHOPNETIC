import NavBar from "./components/Navbar"
import Checkout from "./pages/Checkout"
import {Routes,Route} from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
 import ProductDetails from"./pages/ProductDetails"

function App() {
 
  return (
     <div>
         <div className="bg-slate-900  w-full">
         <NavBar/>  
         </div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/product/:productId" element={<ProductDetails />} />
         </Routes>
     </div>
  )
}

export default App
