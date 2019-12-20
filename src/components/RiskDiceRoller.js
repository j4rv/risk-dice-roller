import React from "react"
import RiskForm from "./RiskForm"
import Rolls from "./Rolls"
import Soldiers from "./Soldiers"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },
})

const RiskDiceRoller = ({ classes }) => (
  <div className={classes.root}>
    <Rolls />
    <RiskForm />
    <Soldiers />
  </div>
)

export default withStyles(styles)(RiskDiceRoller)
