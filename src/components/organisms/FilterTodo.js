import { useDispatch } from "react-redux";
import { changeFilter } from "../../reducers/filterReducer";

import LabelRadio from "../atoms/LabelRadio";

export default function FilterTodo() {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <section>
      <LabelRadio
        onChange={onChange}
        name="todoFilter"
        value="ALL"
        text="전체"
        defaultChecked={true}
      />
      <LabelRadio
        onChange={onChange}
        name="todoFilter"
        value="COMPLETED"
        text="완료"
        defaultChecked={false}
      />
      <LabelRadio
        onChange={onChange}
        name="todoFilter"
        value="INCOMPLETED"
        text="미완료"
        defaultChecked={false}
      />
    </section>
  );
}
