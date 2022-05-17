import React,{useState} from 'react';

export const Counter = () => {
    //esto es un hook 
    const [state, setState] = React.useState(0);

    const add = () => {
        
            setState(state + 1);
    
    }
    
    return (
        <>
        <h1>{state}</h1>
        <button onClick={add}>+</button>
        <button
            onClick={()=>{
                setState(state - 1);
            }}
        >-</button>

        </>
    );
};

