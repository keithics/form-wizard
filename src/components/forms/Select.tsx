import { ISelect, ISelectValues } from 'components/forms/forms.interface';
import Label from 'components/forms/Label';
import { countries } from 'data/countries';
import { getData } from 'lib/insurance.helpers';

function Select({ register, name, label, values }: ISelect<ISelectValues>) {
  const defaultCountry = getData(countries);
  return (
    <div>
      <Label name={name} label={label} />
      <select className="inputs form-select" {...register(name)} defaultValue={defaultCountry.value}>
        {values.map((v) => (
          <option key={v.value} value={v.value}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
