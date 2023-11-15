import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer";
import Advertisement from "./Advertisement";
import CarePlant from "./Plant/components/CarePlant";
import SearchBar from "./SearchBar";

export default function Home(){
  return (
    <div className="App">
        <Nav />
        <Advertisement />
        <div className='welcome'>
          <h2>Hello UserNick👋</h2>
        </div>
        <SearchBar />
        <div className='uniwersal_window'>
          <CarePlant />
        </div>
        <Footer />
    </div>
  );
}
