export default function todo(state = { datas: [] }, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        datas: [...state.datas, { text: action.text, completed: false }],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        datas: state.datas.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
}
