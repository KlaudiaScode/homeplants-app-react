import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import * as React from 'react';


export default function Price() {
    return (
        <FormControl>
        <InputLabel htmlFor="price">Price</InputLabel>
        <OutlinedInput
          id="price"
          startAdornment={<InputAdornment position="start">zł</InputAdornment>}
          label="Price"
        />
      </FormControl>
    );
}
