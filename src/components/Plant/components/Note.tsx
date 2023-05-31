import { Button } from "@mui/material";
import React from "react";

export default function Note(){
    return (
        <div className="category_window">
            <div className="note">
                <input type="datetime-local"></input>
                <textarea> Pojawiła się obszerna, brązowa plamka na jednym liściu</textarea>
                <input type="file"></input>
                <Button>Save</Button>
            </div>
        </div>   
    )
}