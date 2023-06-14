import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";

export default function Email(){
    return(
    <Box display={'flex'} justifyContent={'center'}
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <div style={{display: 'flex',flexDirection: 'column',}}>
            <TextField
            id="outlined-required"
            label="E-mail"
            variant="filled"
            />
            <Button variant="contained" sx={{ m:1, height:50 }}>Save Changes</Button>
        </div>
    </Box>
    )
}
