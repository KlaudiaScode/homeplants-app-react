import React from "react";
import plant from '../img/plant.png';

export interface NavProps{
    setMenuItem: (arg:string)=>void
}

export default function Nav({setMenuItem}: NavProps){
    return (
          <div className="menu">
            <div className="logo">
              <img src={plant} alt="Plant with pot" />
                <a href='homepage'>𝓗𝓸𝓾𝓼𝓮𝓟𝓵𝓪𝓷𝓽𝓼</a>
            </div>
            <div className='menuIcons'>
              <button onClick={()=>{setMenuItem('homepage')}}>🏠</button>
              <button onClick={()=>{setMenuItem('userprofile')}}>👤</button>
              <button onClick={()=>{setMenuItem('userplants')}}>🌿</button>
              <button onClick={()=>{setMenuItem('plantforum')}}>👥</button>
              <button onClick={()=>{setMenuItem('shop')}}>💰</button>
              <button onClick={()=>{setMenuItem('plantsclass')}}>💡</button>
              <button onClick={()=>{setMenuItem('registration')}}>🔒</button>
        </div>
          </div>
        
    )
}