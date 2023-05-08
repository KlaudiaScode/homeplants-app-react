import React from 'react';
import Nav from '../Nav';
import plant from '../../img/plant.jpg';
import palm from '../../img/palm.jpg';

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
                <div className='my_jungle'>
                    <div className='title_page'>
                        <span>My Jungle</span>
                    </div>
                <div className='search_myplant'>
                    <input type='text' placeholder='Write name your plant'></input>
                    <button>Search</button>
                </div>
                <div className='user_plants'>
                    <div className='plants'>
                        <div className='plant'>
                            <img src={plant} alt='my_plant'/>
                            <div className='plant_data'>
                                <span>📄Chlorophytum laxum</span>
                                <span>📍Kitchen</span>
                                <span>💩mar.-apr.(every 2 weeks)</span>
                                <span>💧every 2-3days</span>
                            </div>
                        </div>
                        <div className='next_plant'>
                            <img src={palm} alt='my_plant'/>
                            <div className='plant_data'>
                                <span>📄Chrysalidocarpus syn. Areca</span>
                                <span>📍Livingroom</span>
                                <span>💩mar.-aug.(every month)</span>
                                <span>💧twice weekly</span>
                            </div>
                        </div>
                        <button className='add_plant'>➕</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}