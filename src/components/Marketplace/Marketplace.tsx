import React from 'react';
import Nav from '../Nav';
import plant_ad from '../../img/plant_ad.jpg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Advertisement from '../Advertisement';

export interface ShopProps{
    setMenuItem: (arg:string)=>void
}

export default function Shop(){
    return (
        <div className="App">
            <Nav/>
            <Advertisement />
            <div className='shop'>
                <div className='search_ad'>
                    <input type='text' placeholder='Search...'></input>
                    <div className='dropdown'>
                            <button>Category 🡫</button>
                            <div className="dropdown-content">
                                <li>Potted plants</li>
                                <li>Fertilizers</li>
                                <li>Pots and covers</li>
                                <li>Plant accessories</li>
                                <li>Substrates and additives</li>
                            </div>
                        </div>
                    <button>Search</button>
                </div>
                <label>New announcement plants:</label>
                <div className='announcements'>
                    <Link to='/marketplace/announcement'>
                        <div className='announcement'>
                            <img src={plant_ad} alt='ad_plant'/>
                            <div className='desc_announcement'>
                                <span>Data ogłoszenia: 02.04.2023r</span>
                                <span>Sprzedam: Juka XXL juka gwatemalska, dracena</span>
                                <span>Cena: 25zł</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
//utworzyć uniwersalne okno z zakładkami: Najnowsze ogłoszenia; Dodaj ogłoszenie