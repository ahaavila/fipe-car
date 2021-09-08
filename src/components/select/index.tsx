import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

interface SelectProps {
  selectLabel: string;
  selectOptions: [{
    nome: string;
    codigo: number;
  }];
  handleChange: ()  => void;
}

const select: React.FC = ({ selectLabel, selectOptions, handleChange }: SelectProps) => {

  return (
    <Autocomplete 
      options={selectOptions}
      getOptionLabel={(option) => option.nome}
      style={{ width: '25vw', height: '1.5rem', margin: '0 auto', marginBottom: '2.5rem' }}
      renderInput={(params) => <TextField {...params} label={selectLabel} variant="outlined" />}
      onChange={handleChange}
    />
  );
}

export default select;