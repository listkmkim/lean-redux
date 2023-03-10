import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../modules/todo";
import TodoInputBox from "../molecules/TodoInputBox";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = (e) => {
    dispatch(addTodo(text));

    setText("");
  };

  return (
    <section>
      <TodoInputBox
        textInput={{ value: text, onChange }}
        button={{ onClick, text: "저장" }}
      />
    </section>
  );
}
