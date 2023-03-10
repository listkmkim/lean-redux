import styled from "styled-components";

export default function LineThroughAnchor({
  onClick,
  text,
  children,
  lineThrough,
}) {
  return (
    <Anchor
      lineThrough={lineThrough}
      href="#!"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children ? children : text}
    </Anchor>
  );
}

const Anchor = styled.a`
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
`;
