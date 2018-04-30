import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Collapse from 'material-ui/transitions/Collapse';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Dices from '../icons/Dices';
import Skull from '../icons/Skull';

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  roll: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 18,
    position:"relative",
  },
  red: {
    color: red[500],
  },
  blue: {
    color: blue[500],
  },
  index: {
    color: grey[500],
    fontSize: theme.typography.fontSize,
    position: "absolute",
    right: theme.spacing.unit,
  },
  dices: {
    padding: theme.spacing.unit,
    fontSize: "1.5em",
    textAlign: "center",
  }
});

const RollResult = ({attackerRolls, defenderRolls, attackers, defenders, deadAttackers, deadDefenders, index, show, classes}) => (
  <Paper className={classes.roll}>
    <div>
      <Typography variant="title" align="center">
        <div className={classes.index}>
          {index}
        </div>
          <span className={classes.red}>
            <span>{attackers} </span>
          </span>
          <span> vs </span>
          <span className={classes.blue}>
            <span> {defenders}</span>
          </span>
        <div className={classes.dices}>
          <span className={classes.red}>
            {attackerRolls.map((value) => (
              Dices[value]
            ))}
          </span>
          <span className={classes.blue}>
            {defenderRolls.map((value) => (
              Dices[value]
            ))}
          </span>
        </div>
        <div>
          {Array(deadAttackers).fill().map(() => <Skull color={red[400]}/>)}
          {Array(deadDefenders).fill().map(() => <Skull color={blue[400]}/>)}
        </div>
      </Typography>
    </div>
  </Paper>
)

const Rolls = ({rolls, classes, show}) => (
  <Collapse in={show}>
  <div className={classes.container}>
    {
      rolls.map((roll, i) => (
        <RollResult key={`roll-${i}`} {...roll} index={i+1} show={show} rollClass={classes.roll} classes={classes}/>
      ))
    }
  </div>
  </Collapse>
);

export default connect(
  state => ({rolls: state.rolls, show: state.showRolls}),
)(withStyles(styles)(Rolls));