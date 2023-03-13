import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setDiff } from "../../modules/counter";
import CounterControlBox from "../molecules/CounterControlBox";

export default function Counter() {
  const { number, diff } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onChange = (e) => dispatch(setDiff(parseInt(e.target.value, 10)));
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <section>
      <h1>{number}</h1>
      <CounterControlBox
        numberInput={{ onChange, value: diff }}
        increaseButton={{ onClick: onIncrease, text: "+" }}
        decreaseButton={{ onClick: onDecrease, text: "-" }}
      />
    </section>
  );
}
