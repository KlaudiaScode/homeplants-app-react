import React from "react";
import Nav from "./Nav";
import plant from '../img/plant.png';
import monsterad from '../img/monsterad.jpg';

export interface HomeProps{
    setMenuItem: (arg:string)=>void
}

export default function Home(){
  return (
      <div className="App">
        <div className="houseplants">
            <Nav />
          <div className="advertisement">
            <a href='#advertisement'><p>Miejsce na Twoją reklamę</p></a>
          </div>
          <div className='header'>
             <h2>Hello User👋</h2>
          </div>
          <div className='search'>
                <input type='text' placeholder='Search new plant...'></input>
                <button type='submit'>📸</button>
                <button type='submit'>🔎</button>
          </div>
          <div className='main'>
            <div className='calendar'>TUTAJ BĘDZIE KALENDARZ OPIEKI NAD ROŚLINAMI USERA</div>
            <div className='plant_class'>
              <div><img src={monsterad} alt="catalog plant"/></div>
              <div>
                <p>
                  <b>Monstera Deliciosa</b> Monstera deliciosa to okazałe, modne, silnie płożące się pnącze o bardzo okazałych, spektakularnych liściach. W naturze występuje na terenach lasów tropikalnych Ameryki Środkowej i Południowej. Ozdobą tego niezwykłego gatunku są bardzo duże liście średnicy nawet 60 cm. Monstera deliciosa wytwarza również liczne korzenie powietrzne, które nadają tej roślinie charakteru i umożliwiają jej pięcie się w górę. Młode liście są jasnozielone, z czasem jednak nabierają ciemniejszego koloru, a na ich powierzchni pojawiają się charakterystyczne wcięcia i dziury.<a href='#plant_class'>⮕</a>
                </p>
              </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="contact_details">
              <a href="homepage">https://www.houseplants.com</a>
              <p>house_plants-info@gmail.com</p>
              <p>nr.tel.667456110</p>
            </div>
            <div className="newsletter">
              <p>Dołącz do pasjonatów zielonych pomieszczeń i otrzymuj benefity</p>
              <button className="newsletter_btn">ZAPISZ SIĘ DO NEWSLETTERA</button>
            </div>
            <div className="copyright">
              <a href='#regulation'>Regulamin</a>
              <p>© 2023 HousePlants. Wszelkie prawa zastrzeżone.<br></br>
                This site is protected by Google Privacy Policy </p>
            </div>
          </div>
      </div>
    );
}