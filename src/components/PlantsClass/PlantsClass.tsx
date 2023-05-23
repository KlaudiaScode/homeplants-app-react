import React from 'react';
import Nav from '../Nav';
import { Link } from "react-router-dom";
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
            <SearchBar />
            <div className='categories'>
                <Link to="/plantsclass/category">
                    <button className='plantt'>
                    <label>Kwitnące latem</label></button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Kwitnące wiosną</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Kwitnące jesienią</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Kwitnące zimą</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Ozdobne owoce</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Ozdobne kwiaty</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Ozdobne liście</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Pachnące</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Stanowisko jasne</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Stanowisko zacienione</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Bezpieczne dla zwierząt</label>
                </button>
                </Link>
                <Link to="/plantsclass/category">
                <button className='plantt'>
                    <label>Zioła</label>
                </button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}