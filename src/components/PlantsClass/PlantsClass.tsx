import React from 'react';
import Nav from '../Nav';
import { Link } from "react-router-dom";
import Advertisement from '../Advertisement';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import { Box, Button } from '@mui/material';

export interface UserPlantsProps{
    setMenuItem: (arg:string)=>void
}

export default function UserPlants(){
    return (
        <div className="App">
            <Nav/>
            <Advertisement />
            <SearchBar />
            <Box className='categories' sx={{m:1}}>
                <Link to="/plantsclass/category">
                    <Button variant='contained' className='plantt'>
                    <label>Kwitnące latem</label></Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Kwitnące wiosną</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Kwitnące jesienią</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Kwitnące zimą</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Ozdobne owoce</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Ozdobne kwiaty</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Ozdobne liście</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Pachnące</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Stanowisko jasne</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Stanowisko zacienione</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Bezpieczne dla zwierząt</label>
                </Button>
                </Link>
                <Link to="/plantsclass/category">
                <Button variant='contained' className='plantt'>
                    <label>Zioła</label>
                </Button>
                </Link>
            </Box>
            <Footer />
        </div>
    )
}