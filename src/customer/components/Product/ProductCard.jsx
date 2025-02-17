import React from 'react'
import "./Product.css"
import Product from './Product'

const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
          <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt=''/>
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{Product.brand}</p>
          <p className=''>{product.title}</p>
        </div>
        <div className='flex item-center space-x-2'>
            <p className='font-semibold'>₹{product.discountedPrice}</p>
            <p className='line-through opacity-50'>MRP₹{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPresent}% OFF</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
