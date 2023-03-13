import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../modules/todo";
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
    <section>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            onClick={() => {
              checkTodo(index);
            }}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
    </section>
  );
}
