import styled from "styled-components";

interface InputComponentProps {
  $error: string | undefined;
}

export const InputContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  gap: 7px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: black;
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 20px;
  padding: 20px;
  border-radius: 40px;
  border: 1px solid #FFF;
  input::placeholder {
    color: blue;
}
  /* border: ${({ $error }: any) => (!!$error ? "1px solid red" : "1px solid black")}; */
  cursor: ${({ disabled }: any) => (disabled ? "not-allowed" : "default")};
  background: rgba(255, 255, 255, 0.1);
`;

export const ErrorContainer = styled.div`
  width: 100%;
  /* height: 20px; */
  color: red;
`;
