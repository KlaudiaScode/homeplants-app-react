import { Button } from "@mui/material";
import React from "react";

export default function SearchBar (){
    return (
        	<div className="search_bar"> 
					<input type='text' placeholder='Search for a word...'></input> 
				<Button variant="outlined" type='submit'>📸</Button>
				<Button variant="outlined" type='submit'>🔎</Button>
			</div>
    )
}
