import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={deliveryOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Delivery option" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const deliveryOptions = [
  { label: 'Standard Delivery', price: 10 },
  { label: 'Poczta Polska', price: 11 },
  { label: 'DPD', price: 9 },
  { label: 'InPost', price: 7 },
];
