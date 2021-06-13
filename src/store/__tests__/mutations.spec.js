import mutations from '@/store/mutations';
import { TOGGLE_DARK_MODE } from '@/store/mutation-types';

test(`${TOGGLE_DARK_MODE} toggles darkMode`, () => {
  const state = {
    darkMode: false,
  };
  mutations[TOGGLE_DARK_MODE](state);

  expect(state.darkMode).toBe(true);
});
