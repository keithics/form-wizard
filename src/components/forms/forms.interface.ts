import { IFormValues } from 'pages/Start';
import { Path, UseFormRegister } from 'react-hook-form';

export enum TextInputTypes {
  Text = 'text',
  Number = 'number',
}

export interface IIBaseInput {
  label: string;
  name: Path<IFormValues>;
}

export interface IInput extends IIBaseInput {
  type?: TextInputTypes;
  required: boolean;
  register: UseFormRegister<IFormValues>;
}

export interface ISelectValues {
  name: string;
  value: string;
  isDefault?: boolean;
}

export interface ISelect<value> extends IIBaseInput {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  values: value[];
}

export interface IPackageValues extends ISelectValues {
  percentageAddOn: number;
}
