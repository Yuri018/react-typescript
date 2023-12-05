import {ChangeEventHandler} from 'react';

export interface InputProps {
    placeholder?: string;
    disabled?: boolean;
    name: string;
    labelName: string;
    value?: string;
    onChange?:React.ChangeEventHandler<HTMLInputElement> | undefined;
  }