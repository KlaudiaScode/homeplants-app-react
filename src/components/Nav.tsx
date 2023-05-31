import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "@mui/material";

export interface NavProps{
    setMenuItem: (arg:string)=>void
}

export default function Nav(){
    return (
          <div className="menu">
            <Logo />
            <div className='menuIcons'>
              <Link to="/"><Button aria-label='home page' variant="contained"><span aria-hidden='true'>🏠</span></Button></Link>
              <Link to="/userprofile"><Button variant="contained">👤</Button></Link>
              <Link to="/userplants"><Button variant="contained">🌿</Button></Link>
              <Link to="/plantforum"><Button variant="contained">👥</Button></Link>
              <Link to="/marketplace"><Button variant="contained">💰</Button></Link>
              <Link to="/plantsclass"><Button variant="contained">💡</Button></Link>
              <Link to="/registration"><Button variant="contained">🔒</Button></Link>
            </div>
          </div>
    )
}