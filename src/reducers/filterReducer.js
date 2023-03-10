export default function filter(state = { flag: "ALL" }, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      console.log(action);
      return { ...state, flag: action.flag };
    default:
      return state;
  }
}
