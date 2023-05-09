import React from 'react';
import Nav from '../Nav';

export interface UserPlantsProps{
    setMenuItem: (arg:string)=>void
}

export default function UserPlants({setMenuItem}: UserPlantsProps){
    return (
        <div className="App">
            <div className="houseplants">
                <Nav setMenuItem={setMenuItem} />
                    <div className="advertisement">
                        <a href='#advertisement'><p>Miejsce na Twoją reklamę</p></a>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Search by name......'/>
                        <button>Search</button>
                    </div>
                    <div className='catalog'>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                        <button className='plantt'>
                            <label>Nazwa rośliny na tle jej zdjęcia</label>
                        </button>
                    </div>
            </div>
        </div>
    )
}