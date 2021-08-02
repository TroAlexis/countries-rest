// eslint-disable-next-line import/prefer-default-export
export function filteredCountries({ data, filters }) {
  const filtersNames = Object.keys(filters);
  if (filtersNames.length) {
    const filterItems = (items, filterName) => {
      if (filters[filterName].value) {
        return items.filter((item) => filters[filterName].func(
          item, filters[filterName].value,
        ));
      }
      return items;
    };

    let res = filterItems(data, filtersNames[0]);
    filtersNames.slice(1).forEach((filterName) => {
      res = filterItems(res, filterName);
    });

    return res;
  }
  return data;
}
