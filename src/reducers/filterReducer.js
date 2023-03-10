export default function filter(state = { flag: "" }, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      console.log(action);
      return { ...state, flag: action.flag };
    default:
      return state;
  }
}
