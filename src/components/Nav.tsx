import React from "react";
import plant from '../img/plant.png';
import { Link } from "react-router-dom";

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
              <Link to="/"><button>🏠</button></Link>
              <Link to="/userprofile"><button>👤</button></Link>
              <Link to="/userplants"><button>🌿</button></Link>
              <Link to="/plantforum"><button>👥</button></Link>
              <Link to="/marketplace"><button>💰</button></Link>
              <Link to="/plantsclass"><button>💡</button></Link>
              <Link to="/plantsclass"><button>🔒</button></Link>
            </div>
          </div>
        
    )
}