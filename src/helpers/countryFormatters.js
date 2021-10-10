import numberWithCommas from '@/helpers/numbers';
import { isTextValid } from '@/helpers/text';

export const countryFormatters = {
  area: (value) => (isTextValid(value) ? `${numberWithCommas(value)} km²` : '-'),
  arrayOfStrings: (arr) => (arr.join(', ')),
};

export default countryFormatters;
