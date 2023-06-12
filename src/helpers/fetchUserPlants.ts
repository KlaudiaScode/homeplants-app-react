import React from 'react';

export function fetchUserPlants(){
    const localDataPlants = localStorage.getItem("dataUserPlants")
    if (typeof localDataPlants === 'string') {
        return JSON.parse(localDataPlants)
    }
}
