import {useState} from 'react'
import Input from "components/Input";
import Button from "components/Button";

import {Homework23Wrapper, CustomerData} from "./styles";

function Homework23() {

    const[nameValue, setNameValue] = useState<string>("");
    const[lastNameValue, setLastNameValue] = useState<string>("");
    const[positionValue, setPositionValue] = useState<string>("");
    const[ageValue, setAgeValue] = useState<string>("");

    const onChangeNameInput = (event: any) => {
        setNameValue(event.target.value);
    };
    const onChangeLastNameInput = (event: any) => {
        setLastNameValue(event.target.value);
    };
    const onChangePositionValueInput = (event: any) => {
        setPositionValue(event.target.value);
    };
    const onChangeAgeValueInput = (event: any) => {
        setAgeValue(event.target.value);
    };


    return <Homework23Wrapper>
        <CustomerData>
            <Input
            value= {nameValue}
            name='name'
            labelName='Your Name'
            placeholder='enter your name'
            onChange={onChangeNameInput}
            />
            <Input
            value= {lastNameValue}
            name='last name'
            labelName='Your Last Name'
            placeholder='enter your last name'
            onChange={onChangeLastNameInput}
            />
            <Input
            value= {positionValue}
            name='last name'
            labelName='Your Last Name'
            placeholder='enter your last name'
            onChange={onChangePositionValueInput}
            />
            <Input
            value= {ageValue}
            name='last name'
            labelName='Your Last Name'
            placeholder='enter your last name'
            onChange={onChangeAgeValueInput}
            />
            

        </CustomerData>
    </Homework23Wrapper>
}

export default Homework23;