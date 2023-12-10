import styled from "styled-components";

interface ButtonComponetProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponetProps>`
  width: 100%;
  min-height: 50px;
  height: fit-content;
  margin: 0;
  padding: 4px;
  outline: none;
  cursor: pointer;
  background-color: ${({ disabled }: any) => (disabled ? "grey" : "blue")};
  color: ${({ $isRedFont }: any) => ($isRedFont ? "red" : "white")};
  font-size: 14px;
  font-weight: bold;
`;
