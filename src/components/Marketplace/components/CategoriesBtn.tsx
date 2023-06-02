
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CategoriesBtn() {
    const categories = [
        { label: ' Potted plants' },
        { label: 'Fertilizers' },
        { label: 'Pots and covers'},
        { label: 'Plant accessories' },
        { label: 'Substrates and additives'}
    ]
    return (
    <Autocomplete
        disablePortal
        id="categories"
        options={categories}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Category" />}
    />
    );
    }

