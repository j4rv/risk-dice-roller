import React from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import SoldiersInput from './SoldiersInput';
import {setAttackers, setDefenders, battleOnce, battleToDeath, reset} from '../reducers/risk';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    width: 112
  },
});

const RiskForm = ({
    attackers, defenders, // state
    setAttackers, setDefenders, battleOnce, battleToDeath, reset, // actions
    classes // style
  }) => (
  <div className={classes.container}>
    <SoldiersInput className={classes.textField} title="attackers" value={attackers} inputChangeHandler={setAttackers}/>
    <SoldiersInput className={classes.textField} title="defenders" value={defenders} inputChangeHandler={setDefenders}/>
    <div className={classes.container}>
      <Button variant="raised" color="primary" onClick={battleOnce} className={classes.button}>
        Fight!
      </Button>
      <Button variant="raised" color="primary" onClick={battleToDeath} className={classes.button}>
        To death!
      </Button>
      <Button variant="raised" color="secondary" onClick={reset} className={classes.button}>
        Reset
      </Button>
    </div>
  </div>
)

export default connect(
  state => ({attackers:state.attackers, defenders: state.defenders}),
  {setAttackers, setDefenders, battleOnce, battleToDeath, reset}
)(withStyles(styles)(RiskForm));