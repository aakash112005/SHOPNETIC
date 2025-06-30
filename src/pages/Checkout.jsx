import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const cart = useSelector((state) => state.cart); 

  const location = useLocation();
//    ?? → Nullish Coalescing Operator ,If the value on the left is null or undefined, use the value on the **right** (0`).”
  const totalAmount = location.state?.totalAmount ?? 0;   
  console.log("Inside the checkout page. Cart printing:");
  console.log(cart);
const itemsamount = totalAmount;
const gst =(totalAmount * 0.18);
const deliveryFee = 4;
const amountAfterGst = totalAmount + gst;
const amountAfterAddingDiliveryfee = amountAfterGst + deliveryFee;
const amountToPay = amountAfterAddingDiliveryfee

  return (
   
    <div className="mt-32 px-8 py-6 bg-white border border-slate-300 shadow-md w-[90%] max-w-md mx-auto rounded-lg">
  <h1 className="text-2xl font-bold text-center text-slate-800 mb-4">Proceed to Payment</h1>

  <div className="text-slate-700 text-sm mb-2 flex justify-between">
    <span>Total Items:</span>
    <span>{cart.length}</span>
  </div>

  <div className="text-slate-700 text-sm space-y-1 mb-4">
    <div className="flex justify-between">
      <span>Items Amount:</span>
      <span>${itemsamount.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>GST (18%):</span>
      <span>${gst.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Delivery Fee:</span>
      <span>${deliveryFee}</span>
    </div>
  </div>

  <div className="flex justify-between text-lg font-semibold text-black border-t pt-3 mb-6">
    <span>Total Payable:</span>
    <span>${amountToPay.toFixed(2)}</span>
  </div>

  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-sm transition-all duration-200">
    Pay Now
  </button>
</div>



  );
}

export default Checkout;
