const ADD = "todo/ADD_TODO";
const TOGGLE = "todo/TOGGLE_TODO";

export const addTodo = (text) => ({ type: ADD, text });
export const toggleTodo = (index) => ({ type: TOGGLE, index });

const initialState = {
  datas: [],
};

export default function todo(state = initialState, action) {
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
