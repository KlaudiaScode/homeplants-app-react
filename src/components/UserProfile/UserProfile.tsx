import React from 'react';
import Nav from '../Nav';
import userPhoto from '../../img/userPhoto.png'

export interface ProfileProps{
    setMenuItem: (arg:string)=>void
}

export default function UserProfile({setMenuItem}: ProfileProps){
    return (
        <div className="App">
            <div className="houseplants">
                <Nav setMenuItem={setMenuItem} />
                <div className='user_data'>
                <img src={userPhoto} alt="user photo" />
                    <div className='data'>
                        <div className='first'>
                            <p>Angelika Nowak</p>
                                <span>login</span>
                            <p>angelNowak@onet.pl</p>
                                <span>e-mail</span>
                        </div>
                        <div className='second'>
                            <p>Zdobyte rekomendacje 67%</p>
                                <span>Poleca Cię</span>
                            <p>12.03.2021r</p>
                                <span>Data rejestracji</span>
                        </div>
                    </div>
                </div>
                <div className='data_change'>
                    <div className='first_collumn'>
                        <button className='login'>Zmień login</button>
                        <input type='text'></input>
                        <button className='e-mail'>Zmień e-mail</button>
                        <input type='text'></input>
                        <button className='password'>Zmień hasło</button>
                        <input type='text'></input>
                    </div>
                    <div className='second_collumn'>
                        <button className='photo'>Zmień zdjęcie</button>
                        <input type='text'></input>
                        <button className='personal_data'>Zmień dane osobowe</button>
                        <input type='text'></input>
                        <button className='language'>Zmień język</button>
                        <input type='text'></input>
                    </div>
                    <div className='third_collumn'>
                        <button className='delete_account'>Usuń konto</button>
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
        </div>
    )
}