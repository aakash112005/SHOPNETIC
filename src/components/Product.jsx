import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from "../redux/slices/CartSlice.js";

import {toast} from "react-hot-toast"
import { Link } from 'react-router-dom'

function Product({post}) {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    
    
    function addToCart(){
        dispatch(add(post));
        toast.success("Item Added to cart")
    }

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.success("Item Removed From cart")
    }



return (
  <div className='flex flex-col justify-between items-center mt-5 w-[250px] h-[420px] shadow-xl rounded-lg border-2 border-gray-100 hover:scale-110 transition duration-300 ease-in p-4'>

    <Link to={`/product/${post.id}`} className="flex flex-col items-center">
      <p className='text-gray-700 font-semibold text-lg text-center truncate w-40 mt-1'>{post.title}</p>
      <div className='h-[180px] mt-2'>
        <img src={post.image} className='h-full w-11/12 object-contain' />
      </div>
    </Link>

    {/* Description */}
    <p className='w-40 text-gray-400 font-normal text-[12px] text-center mt-2'>
      {post.description.split(" ").slice(0, 10).join(" ") + "..."}
    </p>

    {/* Price and Button */}
    <div className='flex flex-col gap-2 items-center mt-4'>
      <p className='text-green-600 font-semibold'>${post.price}</p>

      {
        cart.some((p) => p.id === post.id) ? (
          <button
            className='min-w-[120px] px-4 py-1 text-gray-700 border-2 border-gray-700 bg-gray-700 text-white rounded-full font-semibold text-[12px] uppercase transition duration-300 hover:bg-white hover:text-gray-700'
            onClick={(e) => {
              e.stopPropagation(); // stop event bubbling
              removeFromCart();
            }}
          >
            Remove Item
          </button>
        ) : (
          <button
            className='min-w-[120px] px-4 py-1 text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase transition duration-300 hover:bg-gray-700 hover:text-white'
            onClick={(e) => {
              e.stopPropagation(); // stop event bubbling
              addToCart();
            }}
          >
            Add To Cart
          </button>
        )
      }
    </div>
  </div>
);






}

export default Product

