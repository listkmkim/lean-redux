import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../actions";
import Todo from "../molecules/TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => ({
    todos: store.todo.datas,
  }));

  const checkTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
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
