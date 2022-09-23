import { IInput, TextInputTypes } from 'components/forms/forms.interface';
import Label from 'components/forms/Label';
import { IFormValues } from 'pages/Start';
import React, { HTMLProps } from 'react';
import { useFormContext } from 'react-hook-form';

function Input({
  register,
  required,
  label,
  name,
  type = TextInputTypes.Text,
  ...props
}: IInput & HTMLProps<HTMLInputElement>) {
  const {
    formState: { errors },
  } = useFormContext<IFormValues>();

  return (
    <div>
      <Label name={name} label={label} />
      <div className="mt-1">
        <input {...register(name, { required })} type={type} autoComplete={name} className="inputs" {...props} />
      </div>
      {errors[name]?.type === 'required' && (
        <p className="mt-2 form-errors" id={name}>
          This field is required
        </p>
      )}
    </div>
  );
}

export default Input;
