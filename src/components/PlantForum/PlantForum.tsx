import React from 'react';
import Nav from '../Nav/Nav';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { Button } from '@mui/material';
import Advertisement from '../Advertisement';

export interface ForumProps{
    setMenuItem: (arg:string)=>void
}

export default function PlantForum(){
    return (
        <div className="App">
            <Nav/>
            <Advertisement />
            <div className='plant_forum'>
                <div className='nav_forum'>
                    <Link to='posts'><Button variant='contained'>Posts</Button></Link>
                    <Link to='members'><Button variant='contained'>Members</Button></Link>
                    <Link to='questions'><Button variant='contained'>Questions</Button></Link>
                    <Link to='multimedia'><Button variant='contained'>Multimedia</Button></Link>
                    <Link to='messages'><Button variant='contained'>Messages</Button></Link>
                </div>
                <div className='display_category'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}