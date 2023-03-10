export const addTodo = (text) => ({ type: "ADD_TODO", text });
export const toggleTodo = (index) => ({ type: "TOGGLE_TODO", index });
export const changeFilter = (flag) => ({ type: "CHANGE_FILTER", flag });

//const boundAddTodo = (text) => dispatch(addTodo(text));
//boundAddTodo(text);
