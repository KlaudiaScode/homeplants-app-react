import React from 'react';
import Nav from '../Nav';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';

export interface ForumProps{
    setMenuItem: (arg:string)=>void
}

export default function PlantForum(){
    return (
        <div className="App">
            <div className="houseplants">
                <Nav/>
                <div className='plant_forum'>
                    <div className='menu_forum'>
                        <Link to='posts'><button>Posts</button></Link>
                        <Link to='members'><button>Members</button></Link>
                        <Link to='questions'><button>Questions</button></Link>
                        <Link to='multimedia'><button>Multimedia</button></Link>
                        <Link to='messages'><button>Messages</button></Link>
                    </div>
                    <div className='display_category'>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}