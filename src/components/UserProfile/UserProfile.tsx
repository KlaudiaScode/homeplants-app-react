import React, { useState } from 'react';
import Nav from '../Nav';
import Modal from '../Modal';
import { Box, Button, Tab, Tabs } from '@mui/material';
import Footer from '../Footer';
import { Link, Outlet } from 'react-router-dom';
import Advertisement from '../Advertisement';

export interface ProfileProps{
    setMenuItem: (arg:string)=>void
}

export default function UserProfile(){
    const [modalAccountDeleteActive, setModalAccountDeleteActive]=useState(false)
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);}
    return (
        <div className="App">
            <div className="houseplants">
                <Nav/>
                <Advertisement />
                <Box className='data_change_container'>
                    <div className='nav_data_change'>
                        <Tabs value={value} onChange={handleChange} aria-label="data change options" textColor='primary'indicatorColor='secondary' >
                            <Link to='data-profile'><Tab label="User profile" sx={{width:'250px'}} /></Link>
                            <Link to='settings'><Tab label="Change login" sx={{width:'250px'}} /></Link>
                            <Link to='settings'><Tab label="Change e-mail" sx={{width:'250px'}} /></Link>
                            <Link to='settings'><Tab label="Change password" sx={{width:'250px'}} /></Link>
                            <Link to='settings'><Tab label="Change photo" sx={{width:'250px'}} /></Link>
                            <Link to='settings'><Tab label="Change personal data" sx={{width:'250px'}} /></Link>
                            <Link to='settings'><Tab label="Change language" sx={{width:'250px'}} /></Link>
                            <Tab label="Delete account" onClick={()=>setModalAccountDeleteActive(true)} sx={{width:'200px'}} />
                        </Tabs>
                    </div>
                    <div className='uniwersal_window'>
                        <Outlet />
                    </div>
                </Box>
                <Footer />
            </div>
            {modalAccountDeleteActive && <Modal close={()=>setModalAccountDeleteActive(false)}/>}
        </div>
    )
}
