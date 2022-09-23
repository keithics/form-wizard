import { IPackageValues } from 'components/forms/forms.interface';

export const packages: IPackageValues[] = [
  { value: 'standard', name: 'Standard', percentageAddOn: 0, isDefault: true },
  { value: 'sale', name: 'Sale', percentageAddOn: 50 },
  { value: 'safe', name: 'Super Safe', percentageAddOn: 75 },
];
