import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo';

export interface RegistrationProps{
    setMenuItem: (arg:string)=>void
}

export default function Registration(){
    return (
        <div className="App">
            <div className="houseplants">
                <div className='start'>
                    <div className='menu_start'>
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className='contact'>
                            <a href='#regulation'>Regulamin</a>
                            <button className='contact_info'>Kontakt</button>
                        </div>
                    </div>
                    <div className='enter_data'>
                        <button className='registration'>Stwórz Konto</button>
                        <div className="panel_registration">
                            <form>
                                <label className="userlogin">Login:</label>
                                    <input type="text" id="userlogin" name="userlogin" />
                                <label className="name">Name:</label>
                                    <input type="text" id="name" name="name" />
                                <label className="surname">Surname:</label>
                                    <input type="text" id="surname" name="surname" />
                                <label className="city">City:</label>
                                    <input type="text" id="city" name="city" />
                                <label className="email">Enter your email:</label>
                                    <input type="email" id="email" name="email" />
                                <label className="password">Password:</label>
                                    <input type="password" id="password" name="password" />
                                <label className="password_repeat">Repeat password:</label>
                                    <input type="password_repeat" id="password_repeat" name="password_repeat" />
                                <div id="lower">
                                    <input type="checkbox" />
                                    <label className="check" form="checkbox" >Zapamiętaj mnie!</label>
                                    <input type="submit" value="Register" />
                                </div>
                            </form>
                        </div>

                        <button className='login'>Logowanie</button>
                        <div className="panel_log">
                            <form>
                                <label className="username">Login:</label>
                                    <input type="text" id="username" name="username" />
                                <label className="password">Password:</label>
                                <input type="password" id="password" name="password" />
                                <p><a href="#">You don`t remember password?</a></p>
                                <div id="lower">
                                    <input type="checkbox" />
                                    <label className="check" form="checkbox" >Remember me!</label>
                                    <input type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='media_registration'>
                        <p>Zaloguj lub zarejestruj się przez:</p>
                        <button className='facebook'>facebook</button>
                        <button className='google'>Google</button>
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
                            <p>© 2023 HousePlants. Wszelkie prawa zastrzeżone.<br></br>
                            This site is protected by Google Privacy Policy </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}