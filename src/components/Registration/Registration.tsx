import React from 'react';
import Logo from '../../Logo';
import Footer from '../Footer';
import { Button, TextField } from '@mui/material';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

export interface RegistrationProps{
    setMenuItem: (arg:string)=>void
}

export default function Registration(){
    return (
        <div className="App">
            <div className='start'>
                <div className='menu_start'>
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className='contact'>
                        <a href='#regulation'>Statute</a>
                        <Button  variant="outlined" style={{ margin: 20}}>Contact</Button>
                    </div>
                </div>
                <div className='enter_data'>
                    <RegistrationForm />
                    <LoginForm />
                </div>
                <div className='media_registration'>
                    <p>Log in or register via:</p>
                    <Button  variant="outlined">Facebook</Button>
                    <Button  variant="outlined">Google</Button>
                </div>
                <Footer />
            </div>
        </div>
    );
}