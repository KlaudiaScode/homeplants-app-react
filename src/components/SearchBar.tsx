import IconButton from "@mui/material/IconButton";
import React from "react";
import AddAPhotoSharpIcon from '@mui/icons-material/AddAPhotoSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import TextField from '@mui/material/TextField';

export default function SearchBar (){
    return (
        	<div className="search_bar"> 
				<TextField sx={{height: '3vh'}}
					id="filled-search"
					label="Search plant"
					type="search"
					variant="filled"
				/> 
				<IconButton type='submit'><AddAPhotoSharpIcon sx={{ fontSize: 40, color: '#282828'}} /></IconButton>
				<IconButton type='submit'><SearchSharpIcon sx={{ fontSize: 40, color: '#282828'}} /></IconButton>
			</div>
    )
}
