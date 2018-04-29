import React from 'react';
import {connect} from 'react-redux';
import SoldiersInput from './SoldiersInput';
import {Grid,  Button, Paper} from 'material-ui';
import {setAttackers, setDefenders, battleOnce, battleToDeath, reset} from './reducers/risk';

const RiskForm = ({attackers, defenders, setAttackers, setDefenders, battleOnce, battleToDeath, reset}) => (
<Grid container justify="center">
  <Grid item>
    <SoldiersInput title="attackers" value={attackers} inputChangeHandler={setAttackers}/>
    <SoldiersInput title="defenders" value={defenders} inputChangeHandler={setDefenders}/>
  </Grid>
  <Grid item>
    <Button variant="raised" color="primary" onClick={battleOnce}>
      Fight!
    </Button>
    <Button variant="raised" color="primary" onClick={battleToDeath}>
      To death!
    </Button>
    <Button variant="raised" color="secondary" onClick={reset}>
      Reset
    </Button>
  </Grid>
</Grid>
)

export default connect(
  state => ({attackers:state.attackers, defenders: state.defenders}),
  {setAttackers, setDefenders, battleOnce, battleToDeath, reset}
)(RiskForm);