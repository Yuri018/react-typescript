import { ChangeEvent, useState, SetStateAction, Dispatch } from "react";
import Input from "components/Input";
import Button from "components/Button";

import {
  Homework23Wrapper,
  CustomerData,
  PersonCard,
  PersonInfoBig,
  PersonInfoContainer,
  PersonInfoSmall,
} from "./styles";
import { Console } from "console";

interface UserInfo {
  name: string;
  lastName: string;
  ageValue: string;
  jobPosition: string;
}

function Homework23() {
  const [nameValue, setNameValue] = useState<string>("");
  const [lastNameValue, setLastNameValue] = useState<string>("");
  const [positionValue, setPositionValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    lastName: "",
    ageValue: "",
    jobPosition: "",
  });

  //   const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
  //     setNameValue(event.target.value);
  //   };
  //   const onChangeLastNameInput = (event: ChangeEvent<HTMLInputElement>) => {
  //     setLastNameValue(event.target.value);
  //   };
  //   const onChangePositionValueInput = (event: ChangeEvent<HTMLInputElement>) => {
  //     setPositionValue(event.target.value);
  //   };
  //   const onChangeAgeValueInput = (event: ChangeEvent<HTMLInputElement>) => {
  //     setAgeValue(event.target.value);
  //   };

  const onChangeFieldsValue = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: Dispatch<SetStateAction<string>>
  ) => {
    setFieldValue(event.target.value);
  };

  //создаем стейт, который решает кргда показывать карточку
  const [isSchowCard, setIsSchowCard] = useState<boolean>(false);

  return (
    <Homework23Wrapper>
      <CustomerData>
        <Input
          value={nameValue}
          name="name"
          labelName="Your Name"
          placeholder="enter your name"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setNameValue)
          }
        />
        <Input
          value={lastNameValue}
          name="last name"
          labelName="Your Last Name"
          placeholder="enter your last name"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setLastNameValue)
          }
        />
        <Input
          value={positionValue}
          name="Job"
          labelName="Your workplace"
          placeholder="your workplace"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setPositionValue)
          }
        />
        <Input
          value={ageValue}
          name="Age"
          labelName="Your Age"
          placeholder="enter your age"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setAgeValue)
          }
        />
        <Button
          name="Create Card"
          onClick={() => {
            if (
              !!nameValue &&
              !!lastNameValue &&
              !!positionValue &&
              !!ageValue
            ) {
              setUserInfo({
                name: nameValue,
                lastName: lastNameValue,
                ageValue: ageValue,
                jobPosition: positionValue,
              });
              setIsSchowCard(true);
            } else {
                setIsSchowCard(false);
              setTimeout(() => alert("Enter all fields"), 0);
            }
          }}
        />
      </CustomerData>
      {isSchowCard && (
        <PersonCard>
          <PersonInfoContainer>
            <PersonInfoSmall>Name</PersonInfoSmall>
            <PersonInfoBig>{userInfo.name}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>LastName</PersonInfoSmall>
            <PersonInfoBig>{userInfo.lastName}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Age</PersonInfoSmall>
            <PersonInfoBig>{userInfo.ageValue}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Job</PersonInfoSmall>
            <PersonInfoBig>{userInfo.jobPosition}</PersonInfoBig>
          </PersonInfoContainer>
        </PersonCard>
      )}
    </Homework23Wrapper>
  );
}

export default Homework23;
