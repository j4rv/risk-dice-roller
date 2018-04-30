import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Collapse from 'material-ui/transitions/Collapse';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Dices from '../icons/Dices';
import Skull from '../icons/Skull';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  roll: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 18,
  },  
  red: {
    color: red[500]
  },
  blue: {
    color: blue[500]
  },
});

const RollResult = ({attackerRolls, defenderRolls, attackers, defenders, deadAttackers, deadDefenders, index, show, rollClass, redClass, blueClass}) => (
  <Paper className={rollClass}>
    <div>
      <Typography variant="caption" align="right">
        {index}
      </Typography>
      <Typography variant="title" align="center">
        <span className={redClass}>
          <span>{attackers} </span>
        </span>
        <span> vs </span>
        <span className={blueClass}>
          <span> {defenders}</span>
        </span>
      </Typography>
      <Typography variant="headline" align="center">
        <span className={redClass}>
          {attackerRolls.map((value) => (
            Dices[value]
          ))}
        </span>
        <span className={blueClass}>
          {defenderRolls.map((value) => (
            Dices[value]
          ))}
        </span>
      </Typography>
      <Typography align="center">
        {Array(deadAttackers).fill().map(() => <Skull color={red[400]}/>)}
        {Array(deadDefenders).fill().map(() => <Skull color={blue[400]}/>)}
      </Typography>
    </div>
  </Paper>
)

const Rolls = ({rolls, classes, show}) => (
  <Collapse in={show}>
  <div className={classes.container}>
    {
      rolls.map((roll, i) => (
        <RollResult key={`roll-${i}`} {...roll} index={i+1} show={show} rollClass={classes.roll} redClass={classes.red} blueClass={classes.blue}/>
      ))
    }
  </div>
  </Collapse>
);

export default connect(
  state => ({rolls: state.rolls, show: state.showRolls}),
)(withStyles(styles)(Rolls));