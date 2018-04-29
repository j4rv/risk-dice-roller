import React from 'react';
import {Grid,  Button,  Icon,  TextField,  Paper} from 'material-ui';
import RiskForm from './RiskForm';
import Soldiers from './Soldiers';
import Rolls from './Rolls';

/*
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit * 2,
    width: 120
  },
  menu: {
    width: 200
  },
  textField: {
    margin: theme.spacing.unit,
    width: 100
  }
});
*/
const RiskDiceRoller = () => (
  <Paper>
    <Grid container>
      <Grid item xs={12}>
        <RiskForm/>
        <Soldiers/>
        <Rolls/>
      </Grid>
    </Grid>
  </Paper>
)

export default RiskDiceRoller