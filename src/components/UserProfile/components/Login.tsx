import React from "react";
import { Box, Button, TextField, } from "@mui/material";



export default function Login(){
    return(
        <Box display={'flex'} justifyContent={'center'}
        component="form"
        sx={{
            display: 'flex',
            flexDirection: 'row',
            '& .MuiTextField-root': { m: 4, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <div style={{display: 'flex',flexDirection: 'column',}}>
                <TextField
                    id="outlined"
                    label="Login"
                    variant="filled"
                />
                <TextField
                    id="outlined"
                    label="NewLogin"
                    variant="filled"
                />
                <Button variant="contained" sx={{m:4, height:50}}>Save Changes</Button>
            </div>
        </Box>
    )
}