import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const select: React.FC = () => {

  // const UseStyles = makeStyles({
  //   option: {
  //     fontSize: 15,
  //     '& > span': {
  //       marginRight: 10,
  //       fontSize: 18,
  //     },
  //   },
  // });

  // const classes = UseStyles();

  return (
    <Autocomplete 
      options={top4Films}
      // classes={{
      //   option: classes.option,
      // }}
      getOptionLabel={(option) => option.title}
      style={{ width: '25vw', height: '1.5rem', margin: '0 auto', marginBottom: '2.5rem' }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}

const top4Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 }
];

export default select;