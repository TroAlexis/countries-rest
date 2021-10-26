import { SET_DARK_MODE, TOGGLE_DARK_MODE } from '@/store/mutation-types';

export default {
  [TOGGLE_DARK_MODE](state) {
    state.darkMode = !state.darkMode;
  },
  [SET_DARK_MODE](state, payload) {
    state.darkMode = payload;
  },
};
