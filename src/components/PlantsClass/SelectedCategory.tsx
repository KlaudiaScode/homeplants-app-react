import React from 'react';
import Nav from '../Nav';
import { Link } from "react-router-dom";
import firstplant from '../../img/skrzydlokwiat.jpg';
import Advertisement from '../Advertisement';
import SearchBar from '../SearchBar';



export default function SelectedCategory(){
    return (
        <div className="App">
            <Nav/>
            <Advertisement />
            <SearchBar />
            <div className='plants_category'>
                <Link to="/plantsclass/category/blooming-in-summer">
                    <div className='firstplant>'>
                        <img src={firstplant}></img>
                        <div className='name_plant'>
                            <label className='polishName'>SKRZYDŁOKWIAT / SKRZYDŁOLIST</label>
                            <label className='latinName'>SPATHIPHYLLUM</label>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}