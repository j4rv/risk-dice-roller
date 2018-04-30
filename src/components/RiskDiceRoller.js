import React from 'react';
import { withStyles } from 'material-ui/styles';
import RiskForm from './RiskForm';
import Soldiers from './Soldiers';
import Rolls from './Rolls';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
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