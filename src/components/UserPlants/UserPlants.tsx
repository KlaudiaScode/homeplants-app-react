import React from 'react';
import Nav from '../Nav';
import plantImg from '../../img/plant.jpg';
import palm from '../../img/palm.jpg';
import {Link} from 'react-router-dom';
import Advertisement from '../Advertisement';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import { Button } from '@mui/material';

export interface UserPlantsProps{
    setMenuItem: (arg:string)=>void
}

const plants = [
    {
        id: 1000, 
        name: 'Chlorophytum laxum',
        localization: 'Kitchen',
        fertilization: 'mar.-apr',
        watering: 'every 2-3days'
    },
    {
        id: 1001,
        name: 'Platycerium',
        localization: 'Bedroom',
        fertilization: 'spring-summer',
        watering: 'weekly'
    },
    {
        id: 1002,
        name: 'Dracaena marginata',
        localization: 'Bedroom',
        fertilization: 'spring-autumn (every two weeks)',
        watering: 'once a week'
    },
    {
        id: 1003,
        name: 'Monstera deliciosa',
        localization: 'Livingroom',
        fertilization: 'spring - autumn (every 2-3 weeks)',
        watering: 'once a week'
    },
    {
        id: 1004,
        name: 'Chrysalidocarpus syn. Areca',
        localization: 'Livingroom',
        fertilization: 'mar.-aug.(every month)',
        watering: 'twice weekly'
    },
    ]

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
                    {plants.map((plant) => (
                        <Link to='/userplants/Chlorophytum-laxum/description'>
                            <div className="plant">
                            <img src={plantImg} alt='my_plant'/>
                                <div className='plant_data'>
                                    <span>📄{plant.name}</span>
                                    <span>📍{plant.localization}</span>
                                    <span>💩{plant.fertilization}</span>
                                    <span>💧{plant.watering}</span>
                                </div>
                            </div>
                            </Link>
                        ))}
                        
                        {/* <Link to='/userplants/Chlorophytum-laxum/description'>
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
                        </Link> */}
                        <Button className='add_plant'>Add new</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}