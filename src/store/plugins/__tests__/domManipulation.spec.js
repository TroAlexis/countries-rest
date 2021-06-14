import { TOGGLE_DARK_MODE } from '@/store/mutation-types';
import domToggleDarkMode from '@/store/plugins/domManipulation';
import { createStore } from 'vuex';
import mutations from '@/store/mutations';
import state from '@/store/state';

test(`Document gets and removes dark-mode class on ${TOGGLE_DARK_MODE}`, () => {
  const store = createStore({
    plugins: [domToggleDarkMode],
    state: { ...state },
    mutations,
  });

  store.commit(TOGGLE_DARK_MODE);

  expect(document.documentElement.classList).toContain('dark-mode');

  store.commit(TOGGLE_DARK_MODE);

  expect(document.documentElement.classList).not.toContain('dark-mode');
});
