import React from "react";
import member from "../../../img/member.jpg"
import { Button } from "@mui/material";

export default function Members(){
    return (
        <div className="display_category">
            <div className="members">
                <div className="member">
                    <img src={member}></img>
                    <label className="name">Bożena Łęcka</label>
                    <Button>Sent message</Button>
                </div>
            </div>
        </div>
    )
}