import React, { useState } from 'react';
import Nav from '../Nav';
import userPhoto from '../../img/userPhoto.png'
import Modal from '../Modal';

export interface ProfileProps{
    setMenuItem: (arg:string)=>void
}

export default function UserProfile(){
    const [modalAccountDeleteActive, setModalAccountDeleteActive]=useState(false)
    return (
        <div className="App">
            <div className="houseplants">
                <Nav/>
                <div className='user_data'>
                <img src={userPhoto} alt="user photo" />
                    <div className='data'>
                        <div className='first'>
                            <p>John Snow</p>
                                <span>login</span>
                            <p>johnSnow@onet.pl</p>
                                <span>e-mail</span>
                        </div>
                        <div className='second'>
                            <p>Recommendations 67%</p>
                                <span>Recommends you</span>
                            <p>12.03.2021r</p>
                                <span>Date of registration</span>
                        </div>
                    </div>
                </div>
                <div className='data_change'>
                    <div className='first_collumn'>
                        <button className='login'>Change login</button>
                        <button className='e-mail'>Change e-mail</button>
                        <button className='password'>Change password</button>
                    </div>
                    <div className='second_collumn'>
                        <button className='photo'>Change photo</button>
                        <button className='personal_data'>Change personal information</button>
                        <button className='language'>Change language</button>
                    </div>
                    <div className='third_collumn'>
                        <button onClick={()=>setModalAccountDeleteActive(true)} className='delete_account'>Delete account</button>
                    </div>
                </div>
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
                        <p>© 2023 HousePlants.All rights reserved.<br></br>
                        This site is protected by Google Privacy Policy </p>
                    </div>
                </div>
            </div>
            {modalAccountDeleteActive && <Modal close={()=>setModalAccountDeleteActive(false)}/>}
        </div>
    )
}