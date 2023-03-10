import styled from "styled-components";
import PlainAnchor from "../atoms/PlainAnchor";
import PlainList from "../atoms/PlainList";

export default function TodoItem({ onClick, completed, text }) {
  return (
    <PlainList completed={completed}>
      <Anchor onClick={onClick} text={text} />
    </PlainList>
  );
}

const Anchor = styled(PlainAnchor)`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;
