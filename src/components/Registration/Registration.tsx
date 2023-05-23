import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo';
import Footer from '../Footer';

export interface RegistrationProps{
    setMenuItem: (arg:string)=>void
}

export default function Registration(){
    return (
        <div className="App">
            <div className='start'>
                <div className='menu_start'>
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className='contact'>
                        <a href='#regulation'>Statute</a>
                        <button className='contact_info'>Contact</button>
                    </div>
                </div>
                <div className='enter_data'>
                    <button className='registration'>Create an Account</button>
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
                                <label className="check" form="checkbox">Remember me!</label>
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>

                    <button className='login'>Login</button>
                    <div className="panel_log">
                        <form>
                            <label className="username">Login:</label>
                            <input type="text" id="username" name="username" />
                            <label className="password">Password:</label>
                            <input type="password" id="password" name="password" />
                            <p><a href="#">You don`t remember password?</a></p>
                            <div id="lower">
                                <input type="checkbox" />
                                <label className="check" form="checkbox">Remember me!</label>
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='media_registration'>
                    <p>Log in or register via:</p>
                    <button className='facebook'>Facebook</button>
                    <button className='google'>Google</button>
                </div>
                <Footer />
            </div>
        </div>
    );
}