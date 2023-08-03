import React from 'react'
import ProductCard from './Productcard'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

    
 const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
 
 const productList=[
    {
        name:"MacBook",
        price:12000,
        imgSrc:img1,
        id:"jflajfk",

    },
    {
        name:"Shoes",
        price:500,
        imgSrc:img2,
        id:"jflhkfasdjfk",

    },
 ];

 const dispatch=useDispatch();

 const addToCartHandler=(options)=>{
      
      dispatch({type:"calculatePrice"});
      dispatch({type:"addToCart",payload:options});
      toast.success("Added To cart");
 };

 
  return (
    <div className='home'>
        {
            productList.map((e)=>(
                <ProductCard 
                 key={e.id}
                 imgSrc={e.imgSrc}
                 name={e.name}
                 price={e.price}
                 
                 id={e.id}
                 handler={addToCartHandler} />
            ))
        }
    </div>
  )
}

export default Home