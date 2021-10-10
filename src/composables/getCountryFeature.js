import get from 'lodash.get';
import { getTextWithDefault } from '@/helpers/text';

const formatterDefault = (value) => (value);

export const getCountryFeatureValue = (country, path) => (get(country, path));
export const getCountryFeatureText = (value, formatter = formatterDefault) => (formatter(value));
export const getCountryFeature = ({
  country, label, path, formatter,
}) => {
  const value = getCountryFeatureValue(country, path);
  const text = getTextWithDefault(getCountryFeatureText(value, formatter));
  return {
    label,
    value,
    text,
  };
};

export default getCountryFeature;
