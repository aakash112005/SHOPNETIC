// pages/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice.js';
import { toast } from 'react-hot-toast';


function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

function addToCart() {
  dispatch(add(product));
  toast.success("Item added to cart");
}

function removeFromCart() {
  dispatch(remove(product.id));
  toast.success("Item removed from cart");
}


  async function fetchProductDetail() {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product) return <div className="text-center mt-10">No Product Found</div>;

  return (
    <div className="max-w-4xl mx-auto mt-[145px] p-4 border shadow rounded flex flex-col justify-between items-center">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-[300px] mx-auto object-contain" />
      <p className="mt-4 text-gray-700 text-center">{product.description}</p>
      <p className="mt-2 font-bold text-green-600 text-xl">Price : ${product.price}</p>
      <div className="mt-4">
     {
     cart.some((p) => p.id === product.id) ? (
      <button
        onClick={removeFromCart}
        className=" inline-block min-w-[120px] px-4 py-1 text-white bg-gray-700 hover:bg-white hover:text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-sm  uppercase transition duration-300"
      >
        Remove Item
      </button>
     ) : (
      <button
        onClick={addToCart}
        className=" inline-block min-w-[120px] px-4 py-1 text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-sm px-4 py-1 uppercase hover:bg-gray-700 hover:text-white transition duration-300"
      >
        Add To Cart
      </button>
    )
  }
</div>

    </div>
  );
}

export default ProductDetails;
