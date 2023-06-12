import React from 'react';
import Nav from '../Nav/Nav';
import Advertisement from '../Advertisement';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import { Avatar, Box, Button, Container, Link, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { fetchUserPlants } from '../../helpers/fetchUserPlants';

export interface UserPlantsProps {
    setMenuItem: (arg: string) => void
}

export default function UserPlants() {
    const dataPlants = fetchUserPlants();
    return (
        <div className="App">
            <Nav />
            <Advertisement />
            <div className='my_jungle'>
                <div className='title_page'>
                    <span>My Jungle</span>
                </div>
                <SearchBar />
                <div className='user_plants'>
                    <div className='plants'>
                        {dataPlants.map((plant: any) => (
                            <Link key={plant.id} href={`/userplants/${plant.id}/description`} color='inherit'>
                                <Box sx={{ width: '336px', height: '184px', border: 'solid', borderColor: 'black' }}>
                                    <Avatar alt="my plant" src={plant.imgFile} sx={{ width: '150px', height: '150px', float: 'left' }} />
                                    <Container sx={{ width: '180px', height: '184px', display: 'flex', flexDirection: 'column', float: 'right' }}>
                                        <Typography>📄{plant.latinName}</Typography>
                                        <Typography>📍{plant.localization}</Typography>
                                        <Typography>💩{plant.fertilization}</Typography>
                                        <Typography>💧{plant.watering}</Typography>
                                    </Container>
                                </Box>
                            </Link>
                        ))}
                        <Button sx={{ width: 100, backgroundColor: '#B0B0B0', m: 2, textAlign: 'center' }}><AddIcon /></Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
//Przerzucić tablicę dataUserPlants do localStorage.
//Wyświetlić dane W userPlants i Plants z localStorage.