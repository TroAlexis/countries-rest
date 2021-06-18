import { SET_COUNTRIES, SET_FILTER, SET_LOADING } from './mutation-types';

/**
*
* @param { function } commit
* @param { string } data
*/
// eslint-disable-next-line import/prefer-default-export
export async function fetchCountries({ commit }) {
  const data = await fetch('https://restcountries.eu/rest/v2/all').then((res) => res.json());

  commit(SET_COUNTRIES, { data });
  commit(SET_LOADING, { data: false });
}

export function updateFilter({ commit }, filter) {
  commit(SET_FILTER, {
    data: filter,
  });
}
