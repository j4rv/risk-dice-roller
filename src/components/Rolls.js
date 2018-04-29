import React from 'react';
import {connect} from 'react-redux';
import {Paper, Grid} from 'material-ui';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Dices from '../icons/Dices';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
  },
  rollResult: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  }
});

const RollResult = ({attackerRolls, defenderRolls, attackers, defenders, deadAttackers, deadDefenders, index, className}) => (
  <Paper className={className}>
    <div>
      <Typography variant="caption" align="right">
        {index}
      </Typography>
      <Typography variant="headline" align="center" gutterBottom>
        <span style={{color:red[500]}}>
          {attackerRolls.map((value) => (
            Dices[value]
          ))}
        </span>
        <span style={{color:blue[500]}}>
          {defenderRolls.map((value) => (
            Dices[value]
          ))}
        </span>
      </Typography>
      <Typography align="center">
        Attackers: {attackers} -> {attackers - deadAttackers}
      </Typography>
      <Typography align="center">
        Defenders: {defenders} -> {defenders - deadDefenders}
      </Typography>
    </div>
  </Paper>
)

const Rolls = ({rolls, classes}) => (
  <Grid container justify="center" className={classes.container}>
    {
      rolls.map((roll, i) => (
        <RollResult key={`roll-${i}`} {...roll} index={i+1} className={classes.rollResult}/>
      ))
    }
  </Grid>
);

export default connect(
  state => ({rolls: state.rolls}),
)(withStyles(styles)(Rolls));