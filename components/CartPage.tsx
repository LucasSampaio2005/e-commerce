import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import axios from 'axios';

import{
  emptyCart,
  phoneImg,
  ship1Img,
  ship2Img,
  ship3Img,
  warningImg,

} from "../public/assets/images"
import {TbReload} from "react-icons/tb"
import {HiMinusSmall} from "react-icons/hi2"
import {MdOutlineAdd} from "react-icons/md"
import {IoMdClose} from "react-icons/io"
import { StoreProduct } from '../type';
import FormatePrice from './FormatePrice';
import { deleteItem, minusQuatity, plusQuantity, resetCart } from '../redux/shoppersSlice';
import {loadStripe} from "@stripe/stripe-js";
import { useSession } from 'next-auth/react';


const CartPage = () => {
  const {data:session} = useSession();
    const dispatch = useDispatch();
    const stripePromise = loadStripe(process.env.stripe_public_key);
    const productData = useSelector((state: any) => state.shopper.productData);
    const userInfo = useSelector((state: any) => state.shopper.productData);

    const [warningMsg, setWarningMsg] = useState(false);

    const [totalOldPrice, setTotalOldPrice] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [totalAmt, setTotalAmt] = useState(0);
    useEffect(() => {
      setWarningMsg(true)
      let oldPrice = 0;
      let savings = 0;
      let amt = 0;
      productData.map((item:StoreProduct)=>{
        oldPrice += item.oldPrice * item.quantity;
        savings += item.oldPrice - item.price;
        amt += item.price;
        return
      });
      setTotalOldPrice(oldPrice);
      setTotalSavings(savings);
      setTotalAmt(amt);
    }, [productData])

    const handleCheckout = async()=>{
      const stripe = await stripePromise;
      
      const checkoutSession = await axios.post("api/create-checkout-session",{
        item:productData,
        email: session?.user?.email,
      });

      const result:any = await stripe?.redirectToCheckout({
        sessionId:checkoutSession.data.id,

      });

      if(result?.error) alert(result?.error.message);
    };
    return (
      <div className='w-full py-10'>
        <div className='w-full flex gap-10'>
          <div className='w-2/3 flex flex-col gap-5'>
            <h1 className='text-2xl font-bold text-black'>
              Cart{" "}
              <span className='text-lightText font-normal'>({productData.length} items)</span>
            </h1>
  
            <div>
              <div className='text-xl font-bold flex items-center gap-2 mb-2'>
                <Image className='w-10' src={phoneImg} alt="phoneImg" />
                <p>Pickup and delivery options</p>
              </div>
  
              <div className='w-full grid grid-cols-3 gap-4 text-xs'>
                <div className='w-full flex flex-col items-center justify-center gap-1 p-2'>
                  <Image className='w-10' src={ship1Img} alt='ship1Img' />
                  <p className='font-bold'>Shipping</p>
                  <p>All items available</p>
                </div>
  
                <div className='w-full flex flex-col items-center justify-center gap-1 p-2'>
                  <Image className='w-10' src={ship2Img} alt='ship2Img' />
                  <p className='font-bold'>Pickup</p>
                  <p>All items available</p>
                </div>
  
                <div className='w-full flex flex-col items-center justify-center gap-1 p-2'>
                  <Image className='w-10' src={ship3Img} alt='ship3Img' />
                  <p className='font-bold'>Delivery</p>
                  <p>All items available</p>
                </div>
              </div>

              <div className='w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4'>
                <p className='font-semibold text-sm text-zinc-500'>
                  {""}
                  Sold and shipped by <span className='text-black font-semibold'>Shopper.com</span>
                </p>

                <div className='flex gap-2'>
                  <button className='px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-sm'>
                    Best Seller
                  </button>

                  <button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm'>
                    Rollback
                  </button>
                </div>

                <div>
              {productData.map((item: StoreProduct) => (
                <div key={item._id} className='flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                  <div className='w-3/4 flex items-center gap-2 '>
                    <Image className='w-32' width={500} height={500} src={item.image} alt='productImg'/>
                    <div className='flex flex-col'>
                      <h2 className='text-base text-zinc-900'>{item.title}</h2>
                      <p className='text-sm text-zinc-500 mb-2'>{item.description}</p>
                      <p className='text-sm text-zinc-500'>${item.price}</p>
                

                   

                      <p className='text-sm text-zinc-500 flex items-center gap-1'>
                        <span className='bg-blue rounded-full text-white text-xs w-4 h-full flex items-center justify-center'>
                          <TbReload className='rotate-180'/>
                        </span>
                        Free 30-days returns
                      </p>
                    </div>

                    <div className='mt-2 flex items-center gap-6'>
                      <div className='w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3'>
                        <button onClick={()=> dispatch(minusQuatity({
                            _id: item._id,
                            title: item.title,
                            description: item.description,
                            oldPrice: item.oldPrice,
                            price: item.price,
                            brand: item.brand,
                            image: item.image,
                            isNew: item.isNew,
                            category: item.category,
                            quantity: 1,
                        }))} className='text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white '><HiMinusSmall/></button>
                        <span>{item.quantity}</span>
                        <button onClick={()=> dispatch(plusQuantity({
                            _id: item._id,
                            title: item.title,
                            description: item.description,
                            oldPrice: item.oldPrice,
                            price: item.price,
                            brand: item.brand,
                            image: item.image,
                            isNew: item.isNew,
                            category: item.category,
                            quantity: 1,
                        }))} className='text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white '><MdOutlineAdd/></button>
                      </div>
                      <button onClick={() => dispatch(deleteItem(item._id))} className='text-sm underline underline-offset-2 decoration-[1px] text-zin-600 hover:no-underline hover:text-blue duration-300 px-2'>Remove</button>
                    </div>
                  </div>
                  <div className='w-3/4 flex items-center gap-2'>

                  </div>

                  <div className='w-1/4 text-right flex flex-col items-end gap-1'>
                    <p className='font-semibold text-xl text-[#2a8703]'><FormatePrice amount={item.price}/></p>

                    <p className='font-semibold text-xl  line-through'><FormatePrice amount={item.oldPrice}/></p>

                    <div className='flex items-center gap-2 '>
                      <p className='bg-green-200 text-[8px] uppercase px-2 py-[1px]'>
                        You save
                      </p>

                      <p className='text-[#2a8703] font-semibold '>
                        <FormatePrice amount={item.oldPrice - item.price}/>
                      </p>
                    </div>

                  </div>

                </div>
              ))}
            </div>

                <button onClick={() =>dispatch(resetCart)} className='w-44 bg-red-600 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-300'>Reset Cart</button>
              </div>
            </div>
          </div>
          <div className='w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4'>
            <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
            {userInfo ? (
              <button onClick={handleCheckout} className='bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-md font-semibold duration-300'>Continue to checkout</button>
 
            ):(
              <button className='bg-blue bg-opacity-50 cursor-not-allowed w-full text-white h-10 rounded-full duration-300'>Continue to checkout</button>

            )}

            {!userInfo && (
              <p className='text-sm text-center text-red-500 -mt-4 font-semibold '>
                Please sign in for checkout
              </p>
            )
      }
      {warningMsg && (
        <div>
          <div className='bg-[#002d59] text-white p-2 rounded-lg flex items-center justify-between gap-4'>
            <Image className='w-8' src={warningImg} alt='warningImg'/>
            <p className='text-sm'>
              Items in your cart have reduced prices. Check out now for extra savings!
            </p>
            <IoMdClose onClick={() => setWarningMsg(false)} className='text-3xl hover:text-red-400 cursor-pointer duration-200'/>
          </div>
        </div>
      )}

          <p className='text-sm text-center gap-2'>
            For the best shopping experience,{""}
            <span className='underline underline-offset-2 decoration-[1px] ml-1'>sign in</span>
          </p>
            </div>
          
          <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
            <div className='flex flex-col gap-1'>
              <div className='text-sm flex justify-center'>
                <p className='font-semibold'>Subtotal <span>({productData.length} items)</span></p>

                <p className='line-throught text-zinc-500 text-base'><FormatePrice amount={totalOldPrice}/></p>
              </div>

              <div className='text-sm flex justify-between'>
                <p className='font-semibold'>Saving</p>
                <p className='text-[#2a8703] font-bold bg-green-100 py-1 px-[2px] rounded-lg flex'>
                  -<FormatePrice amount={totalSavings}></FormatePrice>
                </p>
              </div>

              <div className='text-sm flex justify-between'>
                <p className='font-semibold'>Total Amount</p>
                <p className='text-zinc-800 font-normal text-base'>
                  -<FormatePrice amount={totalAmt}></FormatePrice>
                </p>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
            <div className='flex flex-col gap-1'>
              <div className='text-sm flex justify-center'>
                <p>Shipping</p>
                <p className='text-[#2a8703] ml-1'>Free</p>
              </div>

              <div className='text-sm flex justify-between'>
                <p className='font-semibold'>Taxes</p>
                <p className='text-zinc-800'>Calculated at checkout</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between '>
            <p>Estimated total</p>
            <p className='text-zinc-800 font-bold text-lg'>
              <FormatePrice amount={totalAmt}/>
            </p>
          </div>  
          </div>
        </div>
      </div>
    );
  };
  
  export default CartPage;