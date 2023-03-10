export default function PlainList({ text, children }) {
  return <li>{children ? children : text}</li>;
}
