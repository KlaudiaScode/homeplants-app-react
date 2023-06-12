import { Avatar, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";

export default function Questions(){
    return (
        <div className="display_category">
            <div>
                <Avatar
                    src=""
                    sx={{ width: 56, height: 56 }}
                />
                <Link href="#"><Typography>Natalia Rot</Typography></Link>
            </div>
            <div>
                <Typography>
                    Hej.
                    Czy z liscia monstery której oczko zostalo wykorzystane  wyrośnie coś jeszcze? Czy komuś się to kiedyś udało?
                </Typography>
            </div>
            <img />
        </div>
    )
}