import {useState} from 'react'

import Input from "components/Input";
import Button from "components/Button";

import { Homework22Wrapper, LoginCard, LoginFormName } from "./styles";

function Homework22() {
  const [emailValue, setEmailValue] = useState<string>("");
const [passwordValue, setPasswordValue] = useState<string>("");

  const onChangeEmailInput = (event: any) => {
    setEmailValue(event.target.value);
  }
  const onChangePasswordInput = (event:any) => {
    setPasswordValue(event.target.value);
  }

  
  return (
    <Homework22Wrapper>
      <LoginCard>
        <LoginFormName>Login form</LoginFormName>
        <Input
        value={emailValue}
          name="email"
          labelName="Email"
          placeholder="Enter email"
          onChange={onChangeEmailInput}
        />
        <Input
        value={passwordValue}
          name="password"
          labelName="Password"
          placeholder="Enter Password"
          onChange={onChangePasswordInput}
        />
        <Button name="LogIn" onClick={() => console.log("Login action")} />
      </LoginCard>
    </Homework22Wrapper>
  );
}

export default Homework22;