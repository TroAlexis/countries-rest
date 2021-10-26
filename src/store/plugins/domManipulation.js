import { SET_DARK_MODE, TOGGLE_DARK_MODE } from '@/store/mutation-types';

const domToggleDarkMode = (store) => {
  store.subscribe((mutation, state) => {
    if ([TOGGLE_DARK_MODE, SET_DARK_MODE].includes(mutation.type)) {
      localStorage.setItem('darkMode', `${state.darkMode}`);
      document.documentElement.classList[state.darkMode ? 'add' : 'remove']('dark-mode');
    }
  });
};

export default domToggleDarkMode;
