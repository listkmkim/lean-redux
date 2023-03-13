import NumberInput from "../atoms/NumberInput";
import PlainButton from "../atoms/PlainButton";

export default function CounterControlBox({
  numberInput,
  increaseButton,
  decreaseButton,
}) {
  return (
    <article>
      <NumberInput onChange={numberInput.onChange} value={numberInput.value} />
      <PlainButton
        onClick={increaseButton.onClick}
        text={increaseButton.text}
      />
      <PlainButton
        onClick={decreaseButton.onClick}
        text={decreaseButton.text}
      />
    </article>
  );
}
