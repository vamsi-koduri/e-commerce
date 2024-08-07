import { Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Box from '@mui/material/Box';
import { Button } from '@mui/material'

const DeliveryAddresForm = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);

    const address={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phoneNumber")
    }
    
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Delivery Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className='border round-5-md shadow-md p-5'>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='give-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lasttName"
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='give-name'
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    id="address"
                    name='address'
                    label='Address'
                    fullWidth
                    autoComplete='give-name'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='give-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name='state'
                    label='State/Province/Region'
                    fullWidth
                    autoComplete='give-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name='zip'
                    label='Zip/Postal code'
                    fullWidth
                    autoComplete='give-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone number"
                    name='phone number'
                    label='Phone Number'
                    fullWidth
                    autoComplete='give-name'
                  />
                </Grid>
                <Grid  item xs={12} sm={6}>
                  <Button
                    sx={{py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type='submit'
                  >
                    Delivery Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddresForm
