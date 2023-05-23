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
            backgroundColor:'navy',
            top:0,
            left:0,
            right:0,
            bottom:0,
            //opacity: 0.4,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }} onClick={close}>
            <div style={{
                width:'70%',
                padding:'20px',
                backgroundColor:'#fff',
            }}>
                <div>
                    <button onClick={close}>X</button>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
//PD.Ustawić dla drugiego diva nieprzezrocyste opacity i dodać do trzeciego diva elementy html