export interface ICountry {
  name: string;
  value: string;
  currency: string;
  rate: number;
  isDefault?: boolean;
}

export const countries: ICountry[] = [
  { name: 'Hong Kong', value: 'hk', currency: 'HKD', rate: 1, isDefault: true },
  { name: 'United States of America', value: 'us', currency: 'USD', rate: 2 },
  { name: 'Australia', value: 'au', currency: 'AUD', rate: 3 },
];
