import React from 'react';

export function fetchUserPlants() {
    const localDataPlants = localStorage.getItem("dataUserPlants")
    if (typeof localDataPlants === 'string') {
        try {
            return JSON.parse(localDataPlants)
        }
        catch (error) {
            return []
        }
    }
    return []
}

