import React from 'react';
import IconButton from "@mui/material/IconButton";
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

export interface NavButtonProps{
    NavIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    ariaLabel: string;
    isActive: boolean;
}

export default function NavButton({NavIcon, ariaLabel, isActive}:NavButtonProps){
    return(
        <IconButton aria-label={ariaLabel} sx={isActive ? { boxShadow: '0 0 0 0.2rem rgba(21, 125, 13, 0.8)' }:{}}>
          <NavIcon sx={{ fontSize: 60, color: '#282828' }} />
        </IconButton>
    )
}