import React from 'react';
import Nav from '../Nav';

export interface ForumProps{
    setMenuItem: (arg:string)=>void
}

export default function PlantForum({setMenuItem}: ForumProps){
    return (
        <div className="App">
            <div className="houseplants">
                <Nav setMenuItem={setMenuItem} />
                <div className='plant_forum'>
                    <div className='menu_forum'>
                        <button>Posts</button>
                        <button>Members</button>
                        <button>Questions</button>
                        <button>Multimedia</button>
                        <button>Messages</button>
                        <div className='search_posts'>
                            <input type='text' placeholder='search in posts'></input>
                            <button>🔎</button>
                        </div>
                        
                    </div>
                    <div className='display_category'>
                        <div>
                            <img/>
                            <p>describe</p>
                        </div>
                        <div>
                            <img/>
                            <p>describe</p>
                        </div>
                        <div>
                            <img/>
                            <p>describe</p>
                        </div>
                        <div>
                            <img/>
                            <p>describe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}