import React from "react";
import member from "../../../img/member.jpg"
import { Avatar, Button, Typography } from "@mui/material";

export default function Members(){
    return (
        <div className="display_category">
            <div className="members">
                <div className="member">
                    <Avatar src="member"></Avatar>
                    <Typography>Bożena Łęcka</Typography>
                    <Button variant="outlined">Sent message</Button>
                </div>
            </div>
        </div>
    )
}