import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function PersonalData() {
    return (
        <Box display={'flex'} justifyContent={'center'}
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
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
                    label="Date of birth"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Voivodeship"
                />
            </div>
            <Button variant="contained" sx={{ m: 4, height: 50 }}>Save Changes</Button>
        </Box>
    )
}
