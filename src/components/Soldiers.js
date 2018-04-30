import React from 'react';
import {connect} from 'react-redux';
import Icon from 'material-ui/Icon';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  soldiers: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
});

const moreAttackersThanDefenders = (attackers, defenders) => (
  parseInt(attackers, 10) >= parseInt(defenders, 10)
)

const getAttackers = (attackers, defenders) => {
  const icon = moreAttackersThanDefenders(attackers, defenders) ? "mood" : "mood_bad";
  return Array.apply(null, { length: attackers }).map((e, i) => (
    <Icon style={{color:red[500]}} key={`attacker-${i}`}>{icon}</Icon>
  ))
}

const getDefenders = (attackers, defenders) => {
  const icon = moreAttackersThanDefenders(attackers, defenders) ? "mood_bad" : "mood";
  return Array.apply(null, { length: defenders }).map((e, i) => (
    <Icon style={{color:blue[500]}} key={`defender-${i}`}>{icon}</Icon>
  ))
}

const Soldiers = ({attackers, defenders, classes}) => (
  <div className={classes.container} >
    <div className={classes.soldiers}>
      { getAttackers(attackers, defenders) }
      { getDefenders(attackers, defenders) }
    </div>
  </div>
);

export default connect(
  state => ({attackers:state.attackers, defenders: state.defenders}),
)(withStyles(styles)(Soldiers));