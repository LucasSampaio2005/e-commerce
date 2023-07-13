import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCart } from '../redux/shoppersSlice'
import Link from 'next/link'

const SucessPage = () => {
    const dispatch = useDispatch();
    return <div className='flex flex-col gap-2 items-center justiq'>
      <h1 className='text-2xl text-hoverBg font-semibold'>Thank you for shopping in ?.com</h1>
      <Link href='/'>
      <button onClick={()=>dispatch(resetCart())} className='text-lg text-lightText hover:underline underline-offset-2 decoration-[1px] hover:text-blue duration-300'>Continue Shopping</button>

      </Link>
    </div>
   
  
}

export default SucessPage