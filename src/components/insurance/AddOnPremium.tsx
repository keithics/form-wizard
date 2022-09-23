import { IPackageValues } from 'components/forms/forms.interface';
import { countries, ICountry } from 'data/countries';
import { calculateAddOn, DefaultKeys, getData } from 'lib/insurance.helpers';
import { IFormValues } from 'pages/Start';
import { Control, useWatch } from 'react-hook-form';

export function AddOnPremium({
  control,
  packageData,
  age,
}: {
  control: Control<IFormValues>;
  packageData: IPackageValues;
  age: number;
}) {
  const defaultCountry = getData(countries);

  const country = useWatch({
    control,
    name: 'country',
    defaultValue: defaultCountry.value,
  });

  // get country data object
  // const countryData = countries.find((c) => c.value === country) || countries[0];
  const countryData = getData(countries, DefaultKeys.VALUE, country) as ICountry;

  return age > 0 ? <>{calculateAddOn(countryData, packageData, age)}</> : null;
}
