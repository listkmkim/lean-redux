import AddTodo from "../organisms/AddTodo";
import FilteredTodoList from "../organisms/FilteredTodoList";
import FilterTodo from "../organisms/FilterTodo";
import TodoList from "../organisms/TodoList";

export default function TodoContainer() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <FilterTodo />
      <FilteredTodoList />
    </div>
  );
}
