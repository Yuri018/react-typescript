import { InputProps } from "./types";

import { InputContainer, InputLabel, InputComponent } from "./styles";

function Input({ disabled, name, placeholder, labelName, value, onChange }: InputProps) {
  const inputId = `${name}-${Math.random()}`;
  
  return (
    <InputContainer>
      <InputLabel htmlFor={inputId}>{labelName}</InputLabel>
      <InputComponent
      value={value}
      onChange={onChange}
        id={inputId}
        // type=""
        name={name}
        disabled={disabled}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default Input;