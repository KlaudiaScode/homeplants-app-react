import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

export interface NavProps{
    setMenuItem: (arg:string)=>void
}

export default function Nav(){
    return (
          <div className="menu">
            <Logo />
            <div className='menuIcons'>
              <Link to="/"><button aria-label='home page'><span aria-hidden='true'>🏠</span></button></Link>
              <Link to="/userprofile"><button>👤</button></Link>
              <Link to="/userplants"><button>🌿</button></Link>
              <Link to="/plantforum"><button>👥</button></Link>
              <Link to="/marketplace"><button>💰</button></Link>
              <Link to="/plantsclass"><button>💡</button></Link>
              <Link to="/registration"><button>🔒</button></Link>
            </div>
          </div>
        
    )
}