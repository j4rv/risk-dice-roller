import {
  battleOnce,
  battleToDeath,
  reset,
  setAttackers,
  setDefenders,
  toggleShowRolls,
} from "../reducers/risk"

import Button from "@material-ui/core/Button"
import React from "react"
import SoldiersInput from "./SoldiersInput"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    width: 112,
  },
})

const RiskForm = ({
  attackers,
  defenders,
  showRolls, // state
  setAttackers,
  setDefenders,
  battleOnce,
  battleToDeath,
  reset,
  toggleShowRolls, // actions
  classes, // style
}) => (
  <div className={classes.container}>
    <SoldiersInput
      className={classes.textField}
      title="attackers"
      value={attackers}
      inputChangeHandler={setAttackers}
    />
    <SoldiersInput
      className={classes.textField}
      title="defenders"
      value={defenders}
      inputChangeHandler={setDefenders}
    />
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        onClick={battleOnce}
        className={classes.button}
      >
        Fight!
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={battleToDeath}
        className={classes.button}
      >
        To death!
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={reset}
        className={classes.button}
      >
        Reset
      </Button>
      <Button onClick={toggleShowRolls} className={classes.button}>
        {showRolls ? "Hide rolls" : "Show rolls"}
      </Button>
    </div>
  </div>
)

export default connect(
  state => ({
    attackers: state.attackers,
    defenders: state.defenders,
    showRolls: state.showRolls,
  }),
  {
    setAttackers,
    setDefenders,
    battleOnce,
    battleToDeath,
    reset,
    toggleShowRolls,
  }
)(withStyles(styles)(RiskForm))
