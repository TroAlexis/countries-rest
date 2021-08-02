import { TOGGLE_DARK_MODE } from '@/store/mutation-types';

const domToggleDarkMode = (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === TOGGLE_DARK_MODE) {
      document.documentElement.classList[state.darkMode ? 'add' : 'remove']('dark-mode');
    }
  });
};

export default domToggleDarkMode;
