import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { toast } from "react-hot-toast"

function CartItems({ item, itemIndex }) {

  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id))
    toast.error("Removed from Cart")
  }

  return (
    <div className="flex items-center p-4 mb-4 border-b border-slate-200 ">
      {/* image */}
      <div className="w-32 h-32 flex-shrink-0 mr-4">
        <img src={item.image} alt="hii" className="w-full h-full object-contain rounded" />
      </div>

      {/* info */}
      <div className="flex flex-col flex-1 space-y-2">
        <h1 className="text-lg font-semibold text-slate-900">{item.title}</h1>
        <h1 className="text-sm text-slate-500 line-clamp-2">{item.description}</h1>

        <div className="flex items-center justify-between mt-2">
          <p className="text-green-600 font-medium">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="bg-red-100 hover:bg-red-200 p-2 rounded-full"
            title="Remove from cart"
          >
            <FcDeleteDatabase size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
