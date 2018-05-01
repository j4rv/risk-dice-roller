const initState = {
  attackers: 1,
  defenders: 1,
  rolls: [],
  showRolls: false,
}

const SET_ATTACKERS = "SET_ATTACKERS";
const SET_DEFENDERS = "SET_DEFENDERS";
const BATTLE_ONCE = "BATTLE_ONCE";
const BATTLE_TO_DEATH = "BATTLE_TO_DEATH";
const RESET = "RESET";
const TOGGLE_SHOW_ROLLS = "TOGGLE_SHOW_ROLLS";

const rollDice = () => (
  Math.floor(Math.random() * 6)
)

const rollAndReorderDices = (amount) => (
  new Array(amount).fill(null)
                  .map(n => rollDice())
                  .sort().reverse()
)

const calculateOneBattle = ({attackers, defenders, rolls}) => {
  const attackerDiceCount = Math.min(3, attackers);
  const defenderDiceCount = Math.min(2, defenders);
  const attackerRolls = rollAndReorderDices(attackerDiceCount);
  const defenderRolls = rollAndReorderDices(defenderDiceCount);
  let deadAttackers = 0;
  let deadDefenders = 0;
  let deathAmount = Math.min(attackerDiceCount, defenderDiceCount);
  for(let i = 0; i < deathAmount; i++){
    let offense = attackerRolls[i];
    let defense = defenderRolls[i];
    // in ties, defense wins, so offense needs to be strictly higher
    if(offense > defense){
      deadDefenders++;
    } else {
      deadAttackers++;
    }
  }
  return {
    attackers: attackers - deadAttackers,
    defenders: defenders - deadDefenders,
    rolls: rolls.concat({
      attackers, defenders,
      attackerRolls, defenderRolls,
      deadAttackers, deadDefenders,
    }),
  };
}

const calculateBattleToDeath = ({attackers, defenders, rolls}) => {
  var battleResult = calculateOneBattle({attackers, defenders, rolls});
  while(bothHaveSoldiers(battleResult)){
    battleResult = calculateOneBattle(battleResult);
  }
  return battleResult;
}

const bothHaveSoldiers = state => (state.attackers > 0 && state.defenders > 0)

/**************
    ACTIONS
***************/

export const setAttackers = (value) => ({
  type: SET_ATTACKERS,
  value: value,
});

export const setDefenders = (value) => ({
  type: SET_DEFENDERS,
  value: value,
});

export const battleOnce = () => ({
  type: BATTLE_ONCE,
})

export const battleToDeath = () => ({
  type: BATTLE_TO_DEATH,
})

export const toggleShowRolls = () => ({
  type: TOGGLE_SHOW_ROLLS,
})

export const reset = () => ({
  type: RESET,
})

/************************
    STATE CALCULATIONS
*************************/

const numberRe = new RegExp("^\\d{0,2}$");
export default (state = initState, action) => {
  switch(action.type){
    case SET_ATTACKERS:
      if(numberRe.test(action.value) === false) return state;
      return {...state, attackers: action.value};
    case SET_DEFENDERS:
      if(numberRe.test(action.value) === false) return state;
      return {...state, defenders: action.value};
    case BATTLE_ONCE:
      if(bothHaveSoldiers(state)===false) return state;
      return {...state, ...calculateOneBattle(state)};
    case BATTLE_TO_DEATH:
      if(bothHaveSoldiers(state)===false) return state;
      return {...state, ...calculateBattleToDeath(state)};
    case TOGGLE_SHOW_ROLLS:
      return {...state, showRolls: !state.showRolls};
    case RESET:
      return {...initState, showRolls: state.showRolls};
    default:
      return state;
  }
}