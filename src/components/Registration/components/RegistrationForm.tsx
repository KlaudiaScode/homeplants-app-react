import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Box } from '@mui/material';



export default function RegistrationForm(){
  return(
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Button variant="outlined">Create an Account</Button>
    <div style={{display: 'flex',
      flexDirection: 'column',}}>
      <TextField
        required
        id="outlined-required"
        label="Login"
      />
      <TextField
        required
        id="outlined-required"
        label="Name"
      />
      <TextField
        required
        id="outlined-required"
        label="Surname"
      />
      <TextField
        required
        id="outlined-required"
        label="E-mail"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <TextField
        id="outlined-password-input"
        label="RepeatPassword"
        type="password"
        autoComplete="current-password"
      />
      <div>
        <FormControlLabel required control={<Checkbox />} label="Accept" />
        <a>Statute</a>
      </div>
    </div>
    </Box>
  )
}
