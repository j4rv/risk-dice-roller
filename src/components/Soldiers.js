import React from 'react';
import {connect} from 'react-redux';
import Icon from 'material-ui/Icon';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  attackers: {
    padding: theme.spacing.unit,
    color: red[500],
    textAlign: "center",
  },  
  defenders: {
    padding: theme.spacing.unit,
    color: blue[500],
    textAlign: "center",
  },
});

const moreSoldiersThanEnemies = (army, enemies) => (
  parseInt(army, 10) >= parseInt(enemies, 10)
)

const getArmy = (army, enemies, armyKey, className) => {
  const icon = moreSoldiersThanEnemies(army, enemies) ? "mood" : "mood_bad";
  return (
    army ? 
      <div className={className}>
        {
          Array.apply(null, { length: army }).map((e, i) => (
            <Icon key={`${armyKey}-${i}`}>{icon}</Icon>
          ))
        }
      </div>
    : null
  )
}

const Soldiers = ({attackers, defenders, classes}) => (
  <div className={classes.container} >
    { getArmy(attackers, defenders, "attackers", classes.attackers) }
    { getArmy(defenders, attackers, "defenders", classes.defenders) }
  </div>
);

export default connect(
  state => ({attackers:state.attackers, defenders: state.defenders}),
)(withStyles(styles)(Soldiers));