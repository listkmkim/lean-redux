import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../modules/todo";

import Todo from "../molecules/TodoItem";

export default function FilteredTodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector(({ todo, filter }) => {
    const flag = filter.flag;
    if (flag === "COMPLETED") {
      return {
        todos: todo.datas.filter((todo) => todo.completed),
      };
    } else if (flag === "INCOMPLETED") {
      return {
        todos: todo.datas.filter((todo) => !todo.completed),
      };
    } else {
      return { todos: todo.datas };
    }
  });

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
