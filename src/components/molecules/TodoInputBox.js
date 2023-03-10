import Button from "../atoms/PlainButton";
import TextInput from "../atoms/PlainTextInput";

export default function TodoInputBox({
  textInput: { onChange, value },
  button: { onClick, text },
}) {
  return (
    <div>
      <TextInput onChange={onChange} value={value} />
      <Button onClick={onClick} text={text} />
    </div>
  );
}
