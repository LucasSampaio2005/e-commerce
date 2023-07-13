import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-hoverBg text-white pt-4 pb-6'>
      <div className='max-w-contentContainer mx-auto'>
        <ul className='w-full flex flex-wrap gap-0.5 justify-center text-sm text-zinc-200'>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>All Departments</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Store Directory</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Carrees</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Our company</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Sell on Wallmart.com</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Help</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Product-Recals</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Acessibility</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Taxt Exempt Program</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Get The Walmart App</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Sign for email</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Safety Data Sheet</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Terms of use</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>Privacy & Security</li>
          <li className='hover:text-white duration-200 ml-2 cursor-pointer'>CA Privacy Rights</li>
        </ul>
        <p className='text-sm text-zinc-300 text-center mt-4'>@ 2023 Shpppers.com All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
