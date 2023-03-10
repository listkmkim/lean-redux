export default function LabelRadio({
  onChange,
  name,
  value,
  text,
  defaultChecked,
  children,
}) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        onChange={onChange}
        value={value}
        defaultChecked={defaultChecked}
      />
      {children ? children : text}
    </label>
  );
}
