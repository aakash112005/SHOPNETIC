import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false)
    const [posts,setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true)

        try{
            const res =  await fetch(API_URL)
            const data = await res.json()
            setPosts(data);
          
            
        }
        catch(error){
             console.log("error");
             setPosts([]);
             
        }

        setLoading(false)
        
    }

    useEffect(()=>{
          fetchProductData();
    },[])
    console.log(posts);
    

    return (
       <div className='mt-[70px]'>
        {
            loading ? <div className="flex justify-center items-center min-h-[80vh]">
        <Spinner />
      </div>:
           posts.length >0 ?
           (
           
            //<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto min-h-[80vh] p-4">

            {
                 posts.map((post)=>{
                  return <Product key = {post.id} post={post}/>
                 })
            }
           </div>):
           <div className='flex justify-center items-center '>
            <h1 className='text-green-900'>No Data Found</h1>
           </div>
          
        }
       </div>
    )
}

export default Home
