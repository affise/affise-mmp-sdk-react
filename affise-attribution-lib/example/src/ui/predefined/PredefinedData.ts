import {
  PredefinedFloat,
  PredefinedLong,
  PredefinedString,
} from 'affise-attribution-lib';

export const predefinedTypes = [
  'PredefinedFloat',
  'PredefinedLong',
  'PredefinedString',
];

export const predefinedValues = {
  PredefinedFloat: Object.values(PredefinedFloat),
  PredefinedLong: Object.values(PredefinedLong),
  PredefinedString: Object.values(PredefinedString),
};

export const defaultPredefinedType: PredefinedType = 'PredefinedFloat';
export const defaultPredefinedValue = PredefinedFloat.PRICE;

export type PredefinedType = keyof typeof predefinedValues;

export type PredefinedData = {
  predefinedType: PredefinedType;
  predefined: string;
  data: any;
};
