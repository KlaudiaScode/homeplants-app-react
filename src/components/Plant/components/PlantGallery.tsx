import React from "react";

export default function PlantGallery(){
    return (
        <div className="category_window">
            <div className="plant_gallery">
                <img></img>
                <img></img>
                <img></img>
            </div>
            <label>Dodaj zdjęcie</label>
            <input type="file"></input>
        </div>
    )
}