const CHANGE = "filter/CHANGE_FILTER";

export const changeFilter = (flag) => ({ type: CHANGE, flag });

const initialState = {
  flag: "ALL",
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      console.log(action);
      return { ...state, flag: action.flag };
    default:
      return state;
  }
}
