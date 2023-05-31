import { Button } from "@mui/material";
import React from "react";

export default function SearchBar (){
    return (
        	<div className="search_bar"> 
					<input type='text' placeholder='Search for a word...'></input> 
				<Button variant='contained' type='submit'>📸</Button>
				<Button variant='contained' type='submit'>🔎</Button>
			</div>
    )
}
