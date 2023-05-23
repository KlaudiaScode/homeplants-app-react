import React from "react";


export default function Footer(){
    return (
        <div className="footer">
            <div className="contact_details">
                <a href="homepage">https://www.houseplants.com</a>
                <p>house_plants-info@gmail.com</p>
                <p>nr.tel.667456110</p>
            </div>
            <div className="newsletter">
                <p>Join the enthusiasts of green spaces and receive benefits</p>
                <button className="newsletter_btn">SUBSCRIBE TO THE NEWSLETTER</button>
            </div>
            <div className="copyright">
                <a href='#regulation'>Regulation</a>
                <p>© 2023 HousePlants. All rights reserved.<br></br>
                    This site is protected by Google Privacy Policy </p>
            </div>
      </div> 
    )
}
