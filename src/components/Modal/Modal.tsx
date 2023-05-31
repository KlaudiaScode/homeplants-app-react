import { Button } from '@mui/material';
import React from 'react';

interface ModalProps{
    close:()=>void;
}

export default function Modal({
    close
}:ModalProps){
    return (
        <div style={{
            position:'absolute',
            backgroundColor:'rgb(178, 190, 181)',
            top:0,
            left:0,
            right:0,
            bottom:0,
            //opacity: 0.5,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }} onClick={close}>
            <div style={{
                width:'70%',
                padding:'20px',
                backgroundColor:'rgb(255, 255, 255)',
            }}>
                <div>
                    <Button onClick={close}>X</Button>
                    <h1>Do you want to delete an existing account?</h1>
                    <Button>Yes</Button>
                    <Button>No</Button>
                </div>
            </div>
        </div>
    )
}
//PD.Ustawić dla drugiego diva opacity i dodać do trzeciego diva elementy html