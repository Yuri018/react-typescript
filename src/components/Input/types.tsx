import {ChangeEventHandler} from 'react';

export interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  labelName: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  type?: 'text' | 'password' | 'checkbox';
  error?: string | undefined;
}