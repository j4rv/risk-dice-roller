import React from 'react';
import {connect} from 'react-redux';
import {Paper, Icon, Grid} from 'material-ui';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
});

const moreAttackersThanDefenders = (attackers, defenders) => (
  parseInt(attackers, 10) >= (defenders, 10)
)

const getAttackers = (attackers, defenders) => {
  const icon = moreAttackersThanDefenders(attackers, defenders) ? "mood" : "mood_bad";
  return Array.apply(null, { length: attackers }).map((e, i) => (
    <Icon style={{color:red[400]}} key={`attacker-${i}`}>{icon}</Icon>
  ))
}

const getDefenders = (attackers, defenders) => {
  const icon = moreAttackersThanDefenders(attackers, defenders) ? "mood_bad" : "mood";
  return Array.apply(null, { length: defenders }).map((e, i) => (
    <Icon style={{color:blue[400]}} key={`defender-${i}`}>{icon}</Icon>
  ))
}

const Soldiers = ({attackers, defenders, classes}) => (
  <Grid container justify="center" >
    <Paper className={classes.paper}>
      { getAttackers(attackers, defenders) }
      { getDefenders(attackers, defenders) }
    </Paper>
  </Grid>
);

export default connect(
  state => ({attackers:state.attackers, defenders: state.defenders}),
)(withStyles(styles)(Soldiers));