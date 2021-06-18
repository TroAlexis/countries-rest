import { SET_COUNTRIES, SET_FILTER, SET_LOADING } from './mutation-types';

export default {
  /**
    *
    * @param { Object } state
    * @param { string } data
    */
  [SET_COUNTRIES](state, { data }) {
    state.data = data;
  },
  [SET_LOADING](state, { data }) {
    state.loading = data;
  },
  [SET_FILTER](state, { data }) {
    state.filter = { ...data };
  },
};
