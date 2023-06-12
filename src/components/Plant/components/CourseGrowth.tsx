import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Note from "./Note";
import List from "@mui/material/List";


export default function CourseGrowth(){
    return (
        <div className="category_window">
            <Box overflow="auto"
                sx={{ width: '100%', bgcolor: '#FFFACD'}}
                >
                 <List sx={{ width: '100%', height: 390}}>
                    <ListItem>
                        <ListItemText>
                            <Note />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Note />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Note />
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
        </div>
              
    )
}