import { SET_COUNTRIES, SET_LOADING, SET_FILTER } from '@/store/countries/mutation-types';
import mutations from '../mutations';

describe('countries/mutations', () => {
  it(`${SET_COUNTRIES} sets countries data`, () => {
    const countries = ['Africa', 'Russia'];
    const state = {
      data: null,
    };
    mutations[SET_COUNTRIES](state, { data: countries });

    expect(state.data).toEqual(countries);
  });

  it(`${SET_LOADING} sets loading data`, () => {
    const state = {
      loading: true,
    };

    mutations[SET_LOADING](state, { data: false });

    expect(state.loading).toBe(false);
  });

  it(`${SET_FILTER} sets filter data`, () => {
    const state = {
      filter: {
        prop: null,
        val: null,
      },
    };
    const filter = {
      prop: 'region',
      val: 'Africa',
    };

    mutations[SET_FILTER](state, { data: filter });

    expect(state.filter).toEqual(filter);
  });
});
