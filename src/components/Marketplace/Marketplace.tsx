import React from 'react';
import Nav from '../Nav';
import seller from '../../img/seller.jpg';
import map from '../../img/map.png';
import plant_ad from '../../img/plant_ad.jpg';

export interface ShopProps{
    setMenuItem: (arg:string)=>void
}

export default function Shop(){
    return (
        <div className="App">
            <div className="houseplants">
                <Nav/>
                <div className='shop'>
                    <div className='search_ad'>
                        <input type='text' placeholder='Search...'></input>
                        <div className='dropdown'>
                            <button>Kategoria 🡫</button>
                            <div className="dropdown-content">
                                <li>Rośliny doniczkowe</li>
                                <li>Nawozy</li>
                                <li>Doniczki i osłonki</li>
                                <li>Akcesoria do roślin</li>
                                <li>Podłoża i dodatki</li>
                            </div>
                        </div>
                        <button>Szukaj</button>
                    </div>
                    <div className="advertisement">
                        <a href='#advertisement'><p>Miejsce na Twoją reklamę</p></a>
                    </div>
                    <label>New announcement plants:</label>
                    <div className='announcements'>
                        <div className='announcement'>
                            <div className='object'>
                                <img src={plant_ad} alt='ad_plant'/>
                                <div className='desc_announcement'>
                                    <span>Data ogłoszenia: 02.04.2023r</span>
                                    <span>Sprzedam: Juka XXL juka gwatemalska, dracena</span>
                                    <span>Cena: 25zł</span>
                                    <span>Wiek rośliny: 1rok</span>
                                    <span>Opis: Piękna, okazała juka: posiadająca trzy rozgałęzienia,
                                        niezwykle gęsta i rozłożysta. Wysokość ok 230 cm. 
                                        Doniczka wchodzi w skład oferty.</span>
                                </div>
                            </div>
                        </div>
                        <div className='second'>
                            <div className='object'>
                                <img src={plant_ad} alt='ad_plant'/>
                                <div className='desc_announcement'>
                                    <span>Data ogłoszenia: 02.04.2023r</span>
                                    <span>Sprzedam: Juka XXL juka gwatemalska, dracena</span>
                                    <span>Cena: 25zł</span>
                                    <span>Wiek rośliny: 1rok</span>
                                    <span>Opis: Piękna, okazała juka: posiadająca trzy rozgałęzienia,
                                        niezwykle gęsta i rozłożysta. Wysokość ok 230 cm. 
                                        Doniczka wchodzi w skład oferty.</span>
                                </div>
                            </div>
                        </div>
                        <div className='third'>
                            <div className='object'>
                                <img src={plant_ad} alt='ad_plant'/>
                                <div className='desc_announcement'>
                                    <span>Data ogłoszenia: 02.04.2023r</span>
                                    <span>Sprzedam: Juka XXL juka gwatemalska, dracena</span>
                                    <span>Cena: 25zł</span>
                                    <span>Wiek rośliny: 1rok</span>
                                    <span>Opis: Piękna, okazała juka: posiadająca trzy rozgałęzienia,
                                        niezwykle gęsta i rozłożysta. Wysokość ok 230 cm. 
                                        Doniczka wchodzi w skład oferty.</span>
                                </div>
                            </div>
                        </div>
                        <div className='fourth'>
                            <div className='object'>
                                <img src={plant_ad} alt='ad_plant'/>
                                <div className='desc_announcement'>
                                    <span>Data ogłoszenia: 02.04.2023r</span>
                                    <span>Sprzedam: Juka XXL juka gwatemalska, dracena</span>
                                    <span>Cena: 25zł</span>
                                    <span>Wiek rośliny: 1rok</span>
                                    <span>Opis: Piękna, okazała juka: posiadająca trzy rozgałęzienia,
                                        niezwykle gęsta i rozłożysta. Wysokość ok 230 cm. 
                                        Doniczka wchodzi w skład oferty.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}