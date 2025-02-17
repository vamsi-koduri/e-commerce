import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItems = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full  object-cover object-top '
            src='https://assets.ajio.com/medias/sys_master/root/20230518/NqKW/64664a25d55b7d0c63c40e5d/-1117Wx1400H-469170146-blue-MODEL.jpg'
            alt=''
            />
        </div>
        <div className='ml-5 space-y-1'>
            <p className='font-semibold'>Mid-Wash Distressed Skinny Fit Jeans</p>
            <p className='opacity-70'>Size: L,Blue</p>
            <p className='opacity-70 mt-2'>Seller: SPYKAR</p>
            <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                <p className='font-semibold'>₹2,205</p>
                <p className='opacity-50 line-through'>₹4,499</p>
                <p className='text-green-600 font-semibold'>5% Off</p>
            </div>
        </div>
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='felx items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
            <span className='py-1 px-7 border rounded-sm'>3 </span>
            <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleOutlineIcon/>
            </IconButton>
            </div>
            <div>
               <Button sx={{color:"RGB(145 85 253)"}} >Remove</Button>
            </div>
        </div>
    </div>
  )
}

export default CartItems
