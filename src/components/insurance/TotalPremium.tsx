import { IPackageValues } from 'components/forms/forms.interface';
import { countries, ICountry } from 'data/countries';
import { packages } from 'data/packages';
import { calculatePremium, DefaultKeys, getData } from 'lib/insurance.helpers';
import { IFormValues } from 'pages/Start';
import { Control, useWatch } from 'react-hook-form';

export function TotalPremium({ control }: { control: Control<IFormValues> }) {
  const defaultCountry = getData(countries);
  const defaultPackage = getData(packages);

  const age = useWatch({
    control,
    name: 'age',
    defaultValue: 0,
  });

  const country = useWatch({
    control,
    name: 'country',
    defaultValue: defaultCountry.value,
  });

  const premium = useWatch({
    control,
    name: 'premium',
    defaultValue: defaultPackage.value,
  });

  // get country data object
  // const countryData = countries.find((c) => c.value === country) || countries[0];
  // const packageData = packages.find((p) => p.value === packageValue) || packages[0];

  const countryData = getData(countries, DefaultKeys.VALUE, country) as ICountry;
  const packageData = getData(packages, DefaultKeys.VALUE, premium) as IPackageValues;

  return age > 0 ? (
    <>
      <h3>
        Your premium is: {calculatePremium(countryData.rate, packageData.percentageAddOn, age)} {countryData.currency}
      </h3>
    </>
  ) : (
    <h3>Enter age to see your premium.</h3>
  );
}
