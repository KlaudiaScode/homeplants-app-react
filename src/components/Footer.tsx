import { Button } from "@mui/material";
import React from "react";


export default function Footer(){
    return (
        <div className="footer">
            <div className="contact_details">
                <a href="/">https://www.houseplants.com</a>
                <p>house_plants-info@gmail.com</p>
                <p>nr.tel.667456110</p>
            </div>
            <div className="newsletter">
                <p>Join the enthusiasts of green spaces and receive benefits</p>
                <Button variant="outlined">SUBSCRIBE TO THE NEWSLETTER</Button>
            </div>
            <div className="copyright">
                <a href='#regulation'>Regulation</a>
                <p>© 2023 HousePlants. All rights reserved.<br></br>
                    This site is protected by Google Privacy Policy </p>
            </div>
      </div> 
    )
}
