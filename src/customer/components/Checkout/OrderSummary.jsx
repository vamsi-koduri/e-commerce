import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItems from '../Cart/CartItems'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-5-md border'>
        <AddressCard />
      </div>
      <div className='mt-5'>
        <div className='lg:grid grid-cols-3  relative'>
          <div className='col-span-2'>
            {[1, 1, 1, 1].map((item) => <CartItems />)}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
              <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
              <hr />
              <div className='space-y-3 font-semibold mb-10'>
                <div className='flex justify-between pt-3 '>
                  <span>Price</span>
                  <span className='text-black'>₹4697</span>
                </div>
                <div className='flex justify-between pt-3 '>
                  <span>Disccount</span>
                  <span className='text-green-600'>-₹3419</span>
                </div>
                <div className='flex justify-between pt-3 '>
                  <span>Delivery Charge</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 font-bold '>
                  <span >Total Amount</span>
                  <span className='text-green-600 '>₹6792</span>
                </div>
              </div>
              <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                Checkout
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderSummary
