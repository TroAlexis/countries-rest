import { TOGGLE_DARK_MODE } from '@/store/mutation-types';

export default {
  [TOGGLE_DARK_MODE](state) {
    state.darkMode = !state.darkMode;
  },
};
