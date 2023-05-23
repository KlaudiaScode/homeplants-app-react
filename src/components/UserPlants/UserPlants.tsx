import React from 'react';
import Nav from '../Nav';
import plant from '../../img/plant.jpg';
import palm from '../../img/palm.jpg';
import {Link} from 'react-router-dom';
import Advertisement from '../Advertisement';
import Footer from '../Footer';
import SearchBar from '../SearchBar';

export interface UserPlantsProps{
    setMenuItem: (arg:string)=>void
}

export default function UserPlants(){
    return (
        <div className="App">
            <Nav/>
            <Advertisement />
            <div className='my_jungle'>
                <div className='title_page'>
                    <span>My Jungle</span>
                </div>
                <SearchBar />
                <div className='user_plants'>
                    <div className='plants'>
                        <Link to='/userplants/Chlorophytum-laxum/description'>
                        <div className='plant'>
                            <img src={plant} alt='my_plant'/>
                            <div className='plant_data'>
                                <span>📄Chlorophytum laxum</span>
                                <span>📍Kitchen</span>
                                <span>💩mar.-apr.(every 2 weeks)</span>
                                <span>💧every 2-3days</span>
                            </div>
                        </div>
                        </Link>
                        <Link to='/userplants/Chrysalidocarpus-syn.-Areca/description'>
                        <div className='next_plant'>
                            <img src={palm} alt='my_plant'/>
                            <div className='plant_data'>
                                <span>📄Chrysalidocarpus syn. Areca</span>
                                <span>📍Livingroom</span>
                                <span>💩mar.-aug.(every month)</span>
                                <span>💧twice weekly</span>
                            </div>
                        </div>
                        </Link>
                        <Link to='/userplants/Chrysalidocarpus-syn.-Areca/description'>
                        <div className='next_plant'>
                            <img src={palm} alt='my_plant'/>
                            <div className='plant_data'>
                                <span>📄Chrysalidocarpus syn. Areca</span>
                                <span>📍Livingroom</span>
                                <span>💩mar.-aug.(every month)</span>
                                <span>💧twice weekly</span>
                            </div>
                        </div>
                        </Link>
                        <Link to='/userplants/Chrysalidocarpus-syn.-Areca/description'>
                        <div className='next_plant'>
                            <img src={palm} alt='my_plant'/>
                            <div className='plant_data'>
                                <span>📄Chrysalidocarpus syn. Areca</span>
                                <span>📍Livingroom</span>
                                <span>💩mar.-aug.(every month)</span>
                                <span>💧twice weekly</span>
                            </div>
                        </div>
                        </Link>
                        <button className='add_plant'>Add new</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}