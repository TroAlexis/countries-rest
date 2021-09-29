import { SET_COUNTRIES, SET_FILTER, SET_LOADING } from './mutation-types';

export default {
  [SET_COUNTRIES](state, { data }) {
    state.data = data;
  },
  [SET_LOADING](state, { data }) {
    state.loading = data;
  },
  [SET_FILTER](state, { data }) {
    const filterExists = state.filters[data.key];
    if (!filterExists) {
      state.filters = { ...state.filters, [data.key]: { value: data.value, func: data.func } };
    } else {
      state.filters[data.key] = { ...state.filters[data.key], value: data.value };
    }
  },
};
