import { useState, useEffect, ChangeEvent } from "react";

import Input from "components/Input";

import { Lesson24Wrapper, Text, Card } from "./styles";

function Lesson24() {
  const [firstName, setFirstName] = useState<string>("");
  const lesson24: string = "Lesson 24";

  const onChangeFirstNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  // 1. Lifecycle: Initialization(создание)
  useEffect(() => {
    console.log("Lificycle method: initialization");
    // Тут обычно делаются get запросы на сервер, котрый нужно сделать чтобы отобразить что-то на странице в самом начале
  }, []);

  useEffect(() => {
    console.log("Liftcycle: Updation")
  }, [firstName]);
  return (
    <Lesson24Wrapper>
      <Text>{lesson24}</Text>
      <Card>
        <Input
          onChange={onChangeFirstNameValue}
          value={firstName}
          labelName="Frist Name"
        />
        {firstName}
      </Card>
    </Lesson24Wrapper>
  );
}

export default Lesson24;
