import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Advertisement from '../Advertisement';
import Footer from '../Footer';
import SettingsMenu from './SettingsMenu';


export interface ProfileProps{
    setMenuItem: (arg:string)=>void;
}

export default function UserProfile(){
    return (
        <div className="App">
            <Nav/>
            <Advertisement />
                <div className='uniwersal_window'>
                    <SettingsMenu />
                </div>
            <Footer />
        </div>
    )
}
