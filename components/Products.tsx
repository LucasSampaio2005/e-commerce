import React from 'react'
import { Item } from '../type'
import Image from 'next/image'
import {GoPlus} from 'react-icons/go'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/shoppersSlice'
import toast, {Toaster} from "react-hot-toast"


const Products = ({ productData }: any) => {
  const dispath = useDispatch()
  return (
    <div className='py-6 px-4 grid grid-cols-4 gap-4'>
      {productData.map((item: Item) => (
        <div key={item._id} className='border-[1px] border-gray-200 mb-6 group'>
          <div className='w-full h-[250px] overflow-hidden p-1'>
            <Image className='w-full h-full object-contain scale-100 group-hover:scale-150 duration-300 ' width={300} height={250} src={item.image} alt="itemImage" />
          </div>
          <div className='px-2 py-4 flex flex-col justify-center'>
            <div className='flex justify-between py-2'>
              <button onClick={() =>dispath(addToCart({
                  _id: item._id,
                  title: item.title,
                  description: item.description,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  brand: item.brand,
                  image: item.image,
                  isNew: item.isNew,
                  category: item.category,
                  
                
              })
              ) && toast.success(`${item.title.substring(0, 20)} is added to cart`)
              } className='w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center  hover:gb-[#004f9a] duration-300'><span><GoPlus/></span>Add</button>
              <Link href={{
                pathname: `product/${item._id}`,
                query:{
                  _id: item._id,
                  title: item.title,
                  description: item.description,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  brand: item.brand,
                  image: item.image,
                  isNew: item.isNew,
                  category: item.category,
                 
                },
              }}
              as={`product/${item._id}`}
              >
                <button className='flex items-center justify-center gap-1 border border-black rounded-full w-25 h-15 bg-white hover:bg-black hover:text-white duration-300'><span><GoPlus/></span>details</button>
              </Link>
            </div>

            <div className='flex items-center gap-3'>
              <p className='font-titleFont text-lg text-green-700 font-semibold'>Now ${item.price}</p>
              
              <p className='text-gray-500 line-through decoration-[1px]'>${item.oldPrice}</p>
            </div>
          </div>
          <p className='text-lg font-semibold flex justify-center items-center py-2'>{item.title.substring(0, 25)}</p>
          
          <p className='text-base text-zinc-500 items-center justify-center flex'>{item.description.substring(0,30)}...</p>

          <div className='flex gap-2 items-center text-sm mt-2 px-1 justify-end'>
            <div className='flex text-sm gap-1'>
              <BsStarFill className='text-yellow'/>
              <BsStarFill className='text-yellow'/>
              <BsStarFill className='text-yellow'/>
              <BsStarFill className='text-yellow'/>
              <BsStarFill className='text-yellow'/>
              <p>25</p>
            </div>
          </div>

        </div>
      ))}
      <Toaster reverseOrder={false} position="top-center" toastOptions={{
        style:{
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
      }}
      />

      
    </div>
  );
}

export default Products
