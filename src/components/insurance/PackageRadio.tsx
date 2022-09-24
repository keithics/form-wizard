import { IPackageValues, ISelect } from 'components/forms/forms.interface';
import { AddOnPremium } from 'components/insurance/AddOnPremium';
import { IFormValues } from 'pages/Start';
import { useFormContext, useWatch } from 'react-hook-form';

function PackageRadio({ name, values, required }: Omit<ISelect<IPackageValues>, 'register'>) {
  const { control, register } = useFormContext<IFormValues>();

  const age = useWatch({
    control,
    name: 'age',
    defaultValue: 0,
  });

  return (
    <>
      <div className="space-y-4 mt-10">
        {values.map((v) => (
          <div key={v.value} className="flex items-center">
            <input
              {...register(name, { required })}
              type="radio"
              id={v.name}
              defaultValue={v.value}
              className="input-radio"
              defaultChecked={v.isDefault}
            />
            <label htmlFor={v.name} className="labels-radio">
              {v.name} <AddOnPremium control={control} packageData={v} age={age} />
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default PackageRadio;
