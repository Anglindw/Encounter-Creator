import React from "react";
import {useState} from 'react';

const RandomMonster = ({monsters}) => {
    const [num, setNum] = useState(0);

    function randomon(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomon(0,333));
    };

    return(
        <div>
        {monsters.map((monster) => {
            const {name} = monster
            
        })}
            <button onClick={handleClick}> Generate A Monster! </button>
        </div>

    );
};
