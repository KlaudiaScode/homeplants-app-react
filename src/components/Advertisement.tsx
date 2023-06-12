import { Typography, Link } from "@mui/material";
import React from "react";


export default function Advertisement(){
    return (
        <div className="advertisement">
            <Link sx={{mt: 5, color: 'blue'}} href='#advertisement'><Typography>Miejsce na Twoją reklamę</Typography></Link>
          </div>
    )
}
