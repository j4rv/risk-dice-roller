import reducer, {setAttackers, setDefenders} from './risk';

describe("Risk reducer", () => {
  test("Returns a state object", () => {
    const res = reducer(undefined, {type: "ANYTHING"});
    expect(res).toBeDefined();
  })

  test("sets the attackers", () => {
    const startState = {
      attackers: 1,
      defenders: 1,
      rolls: [],
    };
    const expectedState = {
      attackers: 10,
      defenders: 1,
      rolls: [],
    };
    const action = setAttackers(10);
    const res = reducer(startState, action)
    expect(res).toEqual(expectedState);
  })

  test("sets the defenders", () => {
    const startState = {
      attackers: 1,
      defenders: 1,
      rolls: [],
    };
    const expectedState = {
      attackers: 1,
      defenders: 10,
      rolls: [],
    };
    const action = setDefenders(10);
    const res = reducer(startState, action)
    expect(res).toEqual(expectedState);
  })
})