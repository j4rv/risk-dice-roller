import React from 'react';
import { withStyles } from 'material-ui/styles';
import RiskForm from './RiskForm';
import Soldiers from './Soldiers';
import Rolls from './Rolls';

const styles = theme => ({
  root: {
    width: "100%",
    padding: theme.spacing.unit,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const RiskDiceRoller = ({classes}) => (
  <div className={classes.root}>
    <RiskForm/>
    <Soldiers/>
    <Rolls/>
  </div>
)

export default withStyles(styles)(RiskDiceRoller)