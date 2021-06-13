import { TOGGLE_DARK_MODE } from '@/store/mutation-types';

export default {
  toggleDarkMode({ commit }) {
    commit(TOGGLE_DARK_MODE);
  },
};
