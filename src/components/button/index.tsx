import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// import { Container } from './styles';

const UseStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);
const button: React.FC = () => {
  const classes = UseStyles();

  return (
    <Button variant="contained" color="primary" size="large" className={classes.margin}>
      Consultar preço
    </Button>
  );
}

export default button;