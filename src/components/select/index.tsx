import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface SelectProps {
  selectLabel: string;
  selectOptions: [{
    nome: string;
    codigo: number;
  }];
  handleChange: (event: any, newValue)  => void;
}

const select: React.FC<SelectProps> = ({ selectLabel, selectOptions, handleChange }) => {

  return (
    <Autocomplete 
      options={selectOptions}
      getOptionLabel={(option) => option.nome}
      style={{ width: '25vw', height: '1.5rem', margin: '0 auto', marginBottom: '3.5rem' }}
      renderInput={(params) => <TextField {...params} label={selectLabel} variant="outlined" />}
      onChange={handleChange}
    />
  );
}

export default select;