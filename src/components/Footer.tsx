import { Button, Link, Typography, } from "@mui/material";
import React from "react";


export default function Footer(){
    return (
        <div className="footer">
            <div className="contact_details">
                <Link color='inherit' href="/">https://www.houseplants.com</Link>
                <Typography>house_plants-info@gmail.com</Typography>
                <Typography>nr.tel.667456110</Typography>
            </div>
            <div className="newsletter">
                <Typography>Join the enthusiasts of green spaces and receive benefits:</Typography>
                <Button sx={{width: 500, height: 50}} variant="outlined">SUBSCRIBE TO THE NEWSLETTER</Button>
            </div>
            <div className="copyright">
                <Link color='inherit' href='#regulation'>Regulation</Link>
                <Typography>© 2023 HousePlants. All rights reserved.</Typography>
                <Typography>This site is protected by Google Privacy Policy </Typography>
            </div>
      </div> 
    )
}
