import React from 'react';
import {connect} from 'react-redux';
import {Grid,  Button} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import SoldiersInput from './SoldiersInput';
import {setAttackers, setDefenders, battleOnce, battleToDeath, reset} from '../reducers/risk';

const styles = theme => ({
  container: {
    flexWrap: 'wrap',
    padding: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit*2,
    width: 112
  },
});

const RiskForm = ({
    attackers, defenders, // state
    setAttackers, setDefenders, battleOnce, battleToDeath, reset, // actions
    classes // style
  }) => (
  <Grid container justify="center" className={classes.container}>
    <SoldiersInput className={classes.textField} title="attackers" value={attackers} inputChangeHandler={setAttackers}/>
    <SoldiersInput className={classes.textField} title="defenders" value={defenders} inputChangeHandler={setDefenders}/>
    <Grid item>
      <Grid container justify="center">
        <Button variant="raised" color="primary" onClick={battleOnce} className={classes.button}>
          Fight!
        </Button>
        <Button variant="raised" color="primary" onClick={battleToDeath} className={classes.button}>
          To death!
        </Button>
        <Button variant="raised" color="secondary" onClick={reset} className={classes.button}>
          Reset
        </Button>
      </Grid>
    </Grid>
  </Grid>
)

export default connect(
  state => ({attackers:state.attackers, defenders: state.defenders}),
  {setAttackers, setDefenders, battleOnce, battleToDeath, reset}
)(withStyles(styles)(RiskForm));