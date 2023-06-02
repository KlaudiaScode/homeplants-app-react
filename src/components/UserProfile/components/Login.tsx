import React from "react";
import { Box, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";



export default function Login(){
    return(
        <Box
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
                />
                <TextField
                    id="outlined"
                    label="NewLogin"
                />
                <Button variant="contained" sx={{m:4}}>Save Changes</Button>
            </div>
        </Box>
    )
}