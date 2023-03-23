export default function PlainAnchor({ onClick, text, children }) {
  return (
    <a
      href="#!"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children ? children : text}
    </a>
  );
}
