import React, { useState } from 'react';
import Nav from '../Nav';
import Advertisement from '../Advertisement';
import Footer from '../Footer';
import { Box, Tab, Tabs } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import DeleteActiveAccount from '../Modal/DeleteActiveAccount';

export interface ProfileProps{
    setMenuItem: (arg:string)=>void;
}

export default function UserProfile(){
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);}
    return (
        <div className="App">
            <div className="houseplants">
                <Nav/>
                <Advertisement />
                <Box >
                    <Tabs sx={{ bgcolor: 'primary.light' }} value={value} onChange={handleChange} aria-label="data change options" textColor='inherit' indicatorColor='secondary' >
                        <Link to='profile'><Tab label="User profile" sx={{width:'250px'}} /></Link>
                        <Link to='settings'><Tab label="Change login" sx={{width:'250px'}} /></Link>
                        <Link to='settings'><Tab label="Change e-mail" sx={{width:'250px'}} /></Link>
                        <Link to='settings'><Tab label="Change password" sx={{width:'250px'}} /></Link>
                        <Link to='settings'><Tab label="Change photo" sx={{width:'250px'}} /></Link>
                        <Link to='settings'><Tab label="Change personal data" sx={{width:'250px'}} /></Link>
                        <Link to='settings'><Tab label="Change language" sx={{width:'250px'}} /></Link>
                        <DeleteActiveAccount />
                    </Tabs>
                    <div className='uniwersal_window'>
                        <Outlet />
                    </div>
                </Box>
                <Footer />
            </div>
        </div>
    )
}
