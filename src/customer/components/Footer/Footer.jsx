import { Grid, Typography ,Link} from '@mui/material'
import {Button} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container   sx={{bgcolor:"black",color:"white",py:3}}>
        <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>About</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Blog</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>press</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Jobs</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Partners</Button>
                </div>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Marketing</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Analytic</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Commerce</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Insights</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Support</Button>
                </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Documentation</Typography>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Guides</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>API Status</Button>
                </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Legal</Typography>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Claim</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Privacy</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h5' gutterBottom>Terms</Button>
                </div>
                
        </Grid>
        <Grid className='pt-20' item xs={12}>
            <Typography variant='body2' component="p" align='center' >&copy; 2024 My Company. All rights reserved.</Typography>
            <Typography variant='body2' component="p" align='center' >Made with love by Me.</Typography>
            <Typography variant='body2' component="p" align='center' >
                Icons made by{' '}
                <Link href="https://www.freepit.com" color="inherit" underline="always">
                   Freepit
                </Link>{' '} 
                form{' '} 
                <Link href="https://www.flaticon.com" color="inherit" underline="always">
                   www.flaticon.com
                </Link>
            </Typography>
       </Grid>
      </Grid>
    </div>
  )
}

export default Footer
