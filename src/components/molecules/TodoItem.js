import Anchor from "../atoms/LineThroughAnchor";
import List from "../atoms/PlainList";

export default function TodoItem({ onClick, completed, text }) {
  return (
    <List>
      <Anchor lineThrough={completed} onClick={onClick} text={text} />
    </List>
  );
}
