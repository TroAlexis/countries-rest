export function getCountryName(country) {
  return country.name?.common;
}

export function getCountryNativeName(country) {
  const nativeNames = country.name?.nativeName;
  if (!nativeNames) {
    return null;
  }
  const [nativeName] = Object.values(nativeNames) || [];
  return nativeName?.official || nativeName?.common;
}
export function getCountryFlag(country) {
  const [flag] = country.flags || [];
  return flag;
}
export function getCountryCapital(country) {
  const [capital] = country.capital || [];
  return capital;
}
export function getCountryTopLevelDomain(country) {
  const [tld] = country.tld || [];
  return tld;
}
export function getCountryCurrencies(country) {
  const { currencies = {} } = country;
  return Object.values(currencies);
}
export function getCountryLanguages(country) {
  const { languages = {} } = country;
  return Object.values(languages);
}
export function getMapLink(country) {
  const { maps = {} } = country;
  const [mapLink] = Object.values(maps);
  return mapLink;
}
