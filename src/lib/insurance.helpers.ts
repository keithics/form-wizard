import { IPackageValues } from 'components/forms/forms.interface';
import { ICountry } from 'data/countries';

const fixedAmount = 10;

/**
 * Calculates Total premium based on age, country and package
 */
export function calculatePremium(rate: number, percentageAddOn: number, age: number): string {
  const total = fixedAmount * age * rate;
  const money = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 });

  return money.format(total + percentage(total, percentageAddOn));
}

/**
 * calculates premium addon
 */
export function calculateAddOn(country: ICountry, packageData: IPackageValues, age: number): string {
  const rate = country.rate;

  const total = fixedAmount * age * rate;
  const money = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 });

  return packageData.percentageAddOn > 0
    ? `+(${money.format(percentage(total, packageData.percentageAddOn))} ${country.currency}, ${
        packageData.percentageAddOn
      }%)`
    : '';
}

/**
 * gets percentage returns 0
 */
export function percentage(value: number, n: number): number {
  return n > 0 ? (value * n) / 100 : 0;
}

export enum DefaultKeys {
  DEFAULT = 'isDefault',
  VALUE = 'value',
}

type CountryPackage = ICountry | IPackageValues;

export function getData(
  data: Array<ICountry | IPackageValues>,
  key: DefaultKeys = DefaultKeys.DEFAULT,
  value: boolean | string = true
): CountryPackage {
  return data.find((c) => c[key] === value) || data[0];
}
