import React from 'react';
import './App.css';
import plant from './img/plant.png';
function App() {
  return (
    <div className="App">
      <div className="houseplants">
        <div className='header'>
          <div className='logo'>
            <img src={plant} alt="Plant with pot" />
          </div>
          <h1>Hello User👋</h1>
          <div className='dropdown'>
            <button className="menu" 
              data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
              𝄙
            </button>
            <ul className="dropdown-content">
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#my_profile">My profile</a></li>
              <li> <a href="#my_plants">My plants</a></li>
              <li><a href="#plants_mail">Plants mail</a></li>
              <li><a href="#sale_of_plants">Sale of plants</a></li>
              <li><a href="#green_group">Green group</a></li>
            </ul>
          </div>
        </div>
        <div className='search'>
              <input type='text' placeholder='Search new plant...'></input>
              <button type='submit'>📸</button>
              <button type='submit'>🔎</button>
        </div>
        <div className='main'>
          <div className='calendar'>TUTAJ BĘDZIE KALENDARZ UŻYTKOWNIKA</div>
          <div className='plant_class'>
              <p>
                <b>Monstera Deliciosa</b> uwielbia mocno wilgotne powietrze,
                warto często ją zraszać przy użyciu atomizera, 
                zwłaszcza w sezonie grzewczym. Monstera nie wymaga 
                częstego podlewania, zwykle raz w tygodniu latem,
                a zimą dwa razy w miesiącu.<a href='#plant_class'>⮕</a>
              </p>
          </div>
        </div>
        <div className='advertisement'>
          <a href='#advertisement'><p>Miejsce na Twoją reklamę</p></a>
        </div>
        <div className='icons'>
          <button>🏠</button>
          <button>👤</button>
          <button>🌿</button>
          <button>💰</button>
          <button>👥</button>
          <button>💬</button>
          <button>💡</button>
        </div>
      </div>
    </div>
  );
}
export default App;

