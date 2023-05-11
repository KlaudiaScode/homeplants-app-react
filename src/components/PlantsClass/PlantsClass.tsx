import React from 'react';
import Nav from '../Nav';
import { Link } from "react-router-dom";

export interface UserPlantsProps{
    setMenuItem: (arg:string)=>void
}

export default function UserPlants(){
    return (
        <div className="App">
            <div className="houseplants">
                <Nav/>
                    <div className="advertisement">
                        <a href='#advertisement'><p>Miejsce na Twoją reklamę</p></a>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Search by name......'/>
                        <button>Search</button>
                    </div>
                    <div className='category'>
                    <Link to="/plantsclass/category"><button className='plantt'>
                            <label>Kwitnące latem</label>
                        </button></Link>
                        <button className='plantt'>
                            <label>Kwitnące wiosną</label>
                        </button>
                        <button className='plantt'>
                            <label>Kwitnące jesienią</label>
                        </button>
                        <button className='plantt'>
                            <label>Kwitnące zimą</label>
                        </button>
                        <button className='plantt'>
                            <label>Ozdobne owoce</label>
                        </button>
                        <button className='plantt'>
                            <label>Ozdobne kwiaty</label>
                        </button>
                        <button className='plantt'>
                            <label>Ozdobne liście</label>
                        </button>
                        <button className='plantt'>
                            <label>Pachnące</label>
                        </button>
                        <button className='plantt'>
                            <label>Stanowisko jasne</label>
                        </button>
                        <button className='plantt'>
                            <label>Stanowisko zacienione</label>
                        </button>
                        <button className='plantt'>
                            <label>Bezpieczne dla zwierząt</label>
                        </button>
                        <button className='plantt'>
                            <label>Zioła</label>
                        </button>
                    </div>
            </div>
        </div>
    )
}