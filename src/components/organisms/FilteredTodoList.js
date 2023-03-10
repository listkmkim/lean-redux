import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../actions";
import Todo from "../molecules/TodoItem";

export default function FilteredTodoList() {
  const dispatch = useDispatch();
  const { todos, filter } = useSelector((store) => ({
    todos: store.todo.datas,
    filter: store.filter.flag,
  }));

  const checkTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div>
      <ul>
        {filter === "ALL" &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              onClick={() => {
                checkTodo(index);
              }}
              text={todo.text}
            />
          ))}

        {filter === "COMPLETED" &&
          todos
            .filter((todo) => todo.completed)
            .map((todo, index) => (
              <Todo
                key={index}
                onClick={() => {
                  checkTodo(index);
                }}
                text={todo.text}
              />
            ))}
        {filter === "COMPLETED" &&
          todos
            .filter((todo) => !todo.completed)
            .map((todo, index) => (
              <Todo
                key={index}
                onClick={() => {
                  checkTodo(index);
                }}
                text={todo.text}
              />
            ))}
      </ul>
    </div>
  );
}
