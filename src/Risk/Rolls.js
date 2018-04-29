import React from 'react';
import {connect} from 'react-redux';
import Dices from '../icons/Dices';
import {Paper, SvgIcon, Grid} from 'material-ui';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import Typography from 'material-ui/Typography';

const Rolls = ({rolls}) => (
  <Grid container justify="center">
        {
          rolls.map((roll, i) => (
    <Grid item>
      <Paper>
            <div key={`roll-${i}`}>
              <Typography variant="title" gutterBottom align="center">
                <div>Roll {i+1}</div>
                <span style={{color:red[500]}}>
                  {roll.attackerRolls.map((value) => (
                    Dices[value]
                  ))}
                </span>
                <span style={{color:blue[500]}}>
                  {roll.defenderRolls.map((value) => (
                    Dices[value]
                  ))}
                </span>
                <div>attackers: {roll.attackers}</div>
                <div>defenders: {roll.defenders}</div>
                <div>Dead attackers: {roll.deadAttackers}</div>
                <div>Dead defenders: {roll.deadDefenders}</div>
              </Typography>
            </div>
      </Paper>
    </Grid>
          ))
        }
  </Grid>
);

export default connect(
  state => ({rolls: state.rolls}),
)(Rolls);