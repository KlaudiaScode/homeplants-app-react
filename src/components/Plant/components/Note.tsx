import { Button, TextField } from "@mui/material";
import React from "react";

export default function Note(){
    return (
        <div className="category_window">
            <div className="note">
                <input type="file"></input>
                <input className="datetime" type="datetime-local"></input>
                <TextField sx={{width: 700}}
                    id="staticnote"
                    label="New note"
                    multiline
                    rows={4}
                />
                <Button variant="contained">Save</Button>
            </div>
        </div>   
    )
}