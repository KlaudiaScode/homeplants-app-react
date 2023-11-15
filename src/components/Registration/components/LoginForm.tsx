import React from "react";
import { Box, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";



export default function LoginForm(){
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
            <Button  variant="outlined">Login</Button>
            <div style={{display: 'flex',flexDirection: 'column',}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Login"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <div>
                    <TextField><a>You don`t remember password?</a></TextField>
                    <FormControlLabel required control={<Checkbox />} label="Remember me!" />  
                </div>
            </div>
        </Box>
    )
}