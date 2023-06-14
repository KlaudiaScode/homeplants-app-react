import React from "react";
import plant_ad from '../../../img/plant_ad.jpg';
import { useLocation, useParams } from "react-router-dom";

export default function Announcement(){
    const location= useLocation();
    const params= useParams();
    console.log(location, params)
    return (
        <div className="App">
            <div className="announcement">
                <img src={plant_ad} alt='ad_plant'/>
                <div className='desc_announcement'>
                    <span>Data ogłoszenia: 02.04.2023r</span>
                    <span>Sprzedam: Juka XXL juka gwatemalska, dracena</span>
                    <span>Cena: 25zł</span>
                    <span>Wiek rośliny: 1rok</span>
                    <span>
                        Opis: Piękna, okazała juka: posiadająca trzy rozgałęzienia,
                        niezwykle gęsta i rozłożysta. Wysokość ok 230 cm. 
                        Doniczka wchodzi w skład oferty.
                    </span>
                </div>
            </div>
        </div>
    )
}