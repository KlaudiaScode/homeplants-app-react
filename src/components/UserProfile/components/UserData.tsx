import { Avatar, Container } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import userPhoto from '../../../img/userPhoto.png';

export default function UserData() {
    const [value, setValue] = React.useState<number | null>(4);
    return (
        <Box sx={{ width: '100%'}} display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
                <Avatar sx={{ width: '20%', height: '20%' }} src={userPhoto} alt="user photo" />
            <Container sx={{ display:'flex', flexDirection:'column', justifyContent: 'space-between' }}>
                <TextField
                    id="standard-read-only-input"
                    label="Name"
                    defaultValue="John"
                    InputProps={{
                        readOnly: true
                    }}
                    variant="standard"
                />
                <TextField
                    id="standard-read-only-input"
                    label="Surname"
                    defaultValue="Wick"
                    InputProps={{
                        readOnly: true
                    }}
                    variant="standard"
                />
                <TextField
                    id="standard-read-only-input"
                    label="E-mail"
                    defaultValue="wwick.john@gmail.com"
                    InputProps={{
                        readOnly: true
                    }}
                    variant="standard"
                />
            </Container>
            <Container sx={{ display:'flex', flexDirection:'column', justifyContent: 'space-between' }}>
                <TextField
                    id="standard-read-only-input"
                    label="Registration data"
                    defaultValue="21.09.1992r"
                    InputProps={{
                        readOnly: true
                    }}
                    variant="standard"
                />
                <Container>
                    <Typography>Recommend</Typography>
                    <Rating name="read-only" value={value} readOnly />
                </Container>
            </Container>
        </Box>
    );
}
