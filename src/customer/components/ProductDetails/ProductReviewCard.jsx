import { Avatar, Box } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import {Rating } from '@mui/material'



 const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={3} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>V</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Vaam</p>
                    <p className='opacity-70'>July 7, 2024</p>
                </div>
            </div>
            <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
            <p>Nice Product,I love this shirt</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
