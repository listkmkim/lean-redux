const ADD = "todo/ADD_TODO";
const TOGGLE = "todo/TOGGLE_TODO";

let nextId = 1;
export const addTodo = (text) => ({ type: ADD, text, id: nextId++ });
export const toggleTodo = (index) => ({ type: TOGGLE, index });

const initialState = {
  datas: [],
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        datas: [...state.datas, { text: action.text, completed: false }],
      };
    case TOGGLE:
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
