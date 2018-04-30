import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Zoom from 'material-ui/transitions/Zoom';
import Collapse from 'material-ui/transitions/Collapse';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Dices from '../icons/Dices';

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
    width: theme.spacing.unit * 30,
  }
});

const RollResult = ({attackerRolls, defenderRolls, attackers, defenders, deadAttackers, deadDefenders, index, show, className}) => (
  <Zoom in={show} 
    style={show ? { transitionDelay: index*20 } : {}}>
    <Paper className={className}>
      <div>
        <Typography variant="caption" align="right">
          {index}
        </Typography>
        <Typography variant="headline" align="center" gutterBottom>
          <span style={{color:red[400]}}>
            <span>{attackers} </span>
            {attackerRolls.map((value) => (
              Dices[value]
            ))}
          </span>
          <span> - </span>
          <span style={{color:blue[400]}}>
            {defenderRolls.map((value) => (
              Dices[value]
            ))}
            <span> {defenders}</span>
          </span>
        </Typography>
        <Typography align="left">
          Attackers: Lost {deadAttackers} soldiers, {attackers - deadAttackers} left.
        </Typography>
        <Typography align="left">
          Defenders: Lost {deadDefenders} soldiers, {defenders - deadDefenders} left.
        </Typography>
      </div>
    </Paper>
  </Zoom>
)

const Rolls = ({rolls, classes, show}) => (
  <Collapse in={show}>
  <div className={classes.container}>
    {
      rolls.map((roll, i) => (
        <RollResult key={`roll-${i}`} {...roll} index={i+1} show={show} className={classes.roll}/>
      ))
    }
  </div>
  </Collapse>
);

export default connect(
  state => ({rolls: state.rolls, show: state.showRolls}),
)(withStyles(styles)(Rolls));