import React from 'react';
import { withStyles } from 'material-ui/styles';
import RiskForm from './RiskForm';
import Soldiers from './Soldiers';
import Rolls from './Rolls';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
    [theme.breakpoints.up('md')]: {
      flexDirection: "column",
    },
  },
  
});

const RiskDiceRoller = ({classes}) => (
  <div className={classes.root}>
    <Rolls/>
    <RiskForm/>
    <Soldiers/>
  </div>
)

export default withStyles(styles)(RiskDiceRoller)