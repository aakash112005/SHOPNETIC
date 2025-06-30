import React, { useEffect, useState } from 'react'
import { useSelector  } from 'react-redux'
import CartItems from '../components/CartItems'
import { Link, NavLink } from "react-router-dom"
import {toast} from "react-hot-toast"



function Cart() {
  const cart = useSelector((state) => state.cart); 

  const [totalAmount, setTotalAmount] = useState(0)
  const [inputValue,setinputvalue] = useState('');
  const [discountApplied ,setdiscountApplied] = useState(false)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

   function submitHandler(event){
    event.preventDefault();
    if(!discountApplied){
       event.preventDefault();
      if(inputValue == "DISCOUNT5"){
          console.log("Form submitted!");
          setTotalAmount((prev)=> prev-5);
          setdiscountApplied(true)
          toast.success("Applied");
       }
       else{
          toast.error("Invalid Coupon Code!");
          
       }
    }
    else{
        
        toast("Coupon already applied!", { icon: "⚠️" });
    }
  }

   function removeCouponHandler(){
    setdiscountApplied(false);
    setinputvalue('');
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    toast.error("Removed Coupon Code!");
   }

  return (
    <div className="min-h-screen p-6 bg-white mt-[100px]">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8">
          {/* left part */}
          <div className="flex-1">
            {cart.map((item, index) => {
              return <CartItems key={item.id} item={item} itemIndex={index} />
            })}
          </div>

          {/* right part */}
          <div className="w-full lg:w-1/3 border border-slate-200 p-6 rounded-lg flex flex-col justify-between bg-white shadow-sm h-fit">
            <div>
              <div className="text-green-700 text-xl font-bold uppercase mb-1">Your Cart</div>
              <div className="text-3xl font-extrabold text-green-600 uppercase mb-4">Summary</div>
              <p className="text-slate-600">Total Items: {cart.length}</p>
            </div>
            {/* coupon section  */}
            <div className="mt-8 border-t pt-4">
                 <div className="text-slate-600 mb-2 mt-3">COUPON : <span className=' font-bold'>DISCOUNT5</span> </div>
                <form onSubmit={submitHandler} className='mb-2'>
                <input type="text" placeholder='Enter Coupon Code'
                onChange={(e)=> setinputvalue(e.target.value) }
                value={inputValue}
                className=' border-2 border-gray-300 focus:border-black/60 focus:outline-none focus:ring-0 text-slate-600 px-1 py-1 rounded'
                />
                <button className=' ml-14 w-4/12 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded shadow'>Apply Coupon</button>
              </form>

              { discountApplied?
               ( <div className='flex mt-2 justify-between items-center'>
                <p className='text-sm text-slate-600'>Coupon Applied :  <span className='font-bold'>{inputValue}</span></p>
                <button 
                className='h-[25px] w-[70px] mt-2 bg-red-600 hover:bg-green-700 text-white font-medium  rounded shadow text-sm items-center'
                  onClick={removeCouponHandler}>
                  Remove</button>
              </div>):
              (<p></p>)
              }
            {/* coupon secton end  */}





              <p className="text-lg font-medium mb-4">Total Amount: <span className="text-slate-900">${totalAmount.toFixed(2)}</span></p>
              <Link to="/Checkout" state={{ totalAmount }}>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded shadow">
                Checkout Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-24 space-y-4">
          <h1 className="text-2xl font-semibold">Cart is Empty</h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-slate-900 text-white px-4 py-2 rounded shadow">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
