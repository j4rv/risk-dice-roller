import React from 'react';
import {connect} from 'react-redux';
import {Paper, Icon, Grid} from 'material-ui';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';

const getAttackers = (attackers, defenders) => {
  const icon = attackers >= defenders ? "mood" : "mood_bad";
  return Array.apply(null, { length: attackers }).map((e, i) => (
    <Icon style={{color:red[500]}} key={`attacker-${i}`}>{icon}</Icon>
  ))
}

const getDefenders = (attackers, defenders) => {
  const icon = defenders >= attackers ? "mood" : "mood_bad";
  return Array.apply(null, { length: defenders }).map((e, i) => (
    <Icon style={{color:blue[500]}} key={`attacker-${i}`}>{icon}</Icon>
  ))
}

const Soldiers = ({attackers, defenders}) => (
  <Grid container justify="center">
    <Paper>
      { getAttackers(attackers, defenders) }
      { getDefenders(attackers, defenders) }
    </Paper>
  </Grid>
);

export default connect(
  state => ({attackers:state.attackers, defenders: state.defenders}),
)(Soldiers);