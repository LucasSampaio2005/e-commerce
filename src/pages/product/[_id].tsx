import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import {IoMdHeartEmpty} from "react-icons/io"
import {BsStarFill, BsInfoCircle} from "react-icons/bs"
import { ship1Img, ship2Img, ship3Img } from '../../../public/assets/images';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/shoppersSlice';

const ProductDetails = () => {
  const  router = useRouter();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  console.log(router)
 
  useEffect(() =>{
    setLoading(true);
    setProduct(router.query);
    setLoading(false);
  }, [router.query]);

  console.log(product);

  const _d = Number(product._id)


   return( <div className='w-full bg-white'>
    <div className='max-w-contentContainer mx-auto flex items-center py-4'>
      <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
        <img src={product.image} alt='productImg' className='w-[35%] transform-origin-top-left cursor-move duration-500 '/>
      </div>
      <div className='w-1/3 h-full flex flex-col gap-2'>
        <p className='p-2 text-[#004f9a] text-sm font-semibold border border-gray-400 rounded-md'>500+ bought since yesterday</p>
        <div className='px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6'>
          <div className='flex justify-center items-center'>
            <div className='flex gap-2'>
              <button className='px-2 py-[1px] text-[#004f9a] text-sm border-[1px] font-semibold'>Best Seller</button>
              <button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm font-semibold'>Rollback</button>
            </div>
            <IoMdHeartEmpty className='text-gray-600 text-2xl'/>

          </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm underline underline-offset-4'>
            {product.brand}
          </p>
          
          <p className='text-xl font-semibold text-black'>
            {product.title}
          </p>

          <p>{product.description}</p>
          <div className='flex gap-2 items-center text-xs mt-2'>
            <div className='flex gap-1'>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
            </div>
            <p className='font-semibold color-yellow'>25</p>
          </div>

          <div className='flex items-end gap-2'>
            <p className='font-semibold text-2xl text-[#2a8703]'>Now ${product.price}{""}</p>

            <p className='text-sm text-zinc-500 line-through flex items-center gap-1 '>${product.oldPrice} 
              <span><BsInfoCircle/></span>
            </p>
          </div>
        </div>

        <div className='text-sm text-black flex flex-col gap-1'>
          <p>
            <span className='font-semibold'>$18/mo</span>{""}
            <span className='font-bold'>withAffirm</span>{""}
            <span className='underline underline-offset-2'>Learn how...</span>{""}
          </p>

          <p className='text-xs text-zinc-500 flex items-center gap-1'>        
            Price when purchased online
            <span>
              <BsInfoCircle/>
            </span>
          </p>
        </div>

        <div className='border-b-[1px] border-b-zinc-300 pb-4'>
          <button onClick={() => dispatch(addToCart({
              _id: product._id,
              title: product.title,
              description: product.description,
              oldPrice: product.oldPrice,
              price: product.price,
              brand: product.brand,
              image: product.image,
              category: product.category,
              quantity: product.quantity,
          }))} className='w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300'>Add to cart</button>
        </div>
          <p className='text-base font-semibold'>How would you like your item?</p>
          <div className='w-full grid grid-cols-3 gap-4 text-xs'>
            <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-5'>
              <Image className='w-10' src={ship1Img} alt='shippingImg'/>
              <p>Shopping</p>
              <p>I morgen</p>
              <p>fri</p>
            </div>

            <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-5'>
              <Image className='w-10' src={ship2Img} alt='shippingImg'/>
              <p>Pickup</p>
              <p>I morgen</p>
              <p>fri</p>
            </div>

            <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-5'>
              <Image className='w-10' src={ship3Img} alt='shippingImg'/>
              <p>levering</p>
              <p>i morgen</p>
              
            </div>
          </div>
          <p className='font-bold text-xs'>
            Atlas ASA - 5667242 - Oslo{""}
            <span className='font-normal underline underline-offset-2 ml-1'>Change</span>
          </p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default ProductDetails