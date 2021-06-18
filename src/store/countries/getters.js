// eslint-disable-next-line import/prefer-default-export
export function filteredCountries({ data, filter: { prop = null, val = null } }) {
  return data && prop && val
    ? data.filter((
      country,
    ) => country[prop] === val)
    : data;
}
