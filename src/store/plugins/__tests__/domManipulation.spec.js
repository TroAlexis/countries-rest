import { TOGGLE_DARK_MODE } from '@/store/mutation-types';

import store from '@/store';

describe('domToggleDarkMode', () => {
  it(`Document gets and removes dark-mode class on ${TOGGLE_DARK_MODE}`, () => {
    store.commit(TOGGLE_DARK_MODE);

    expect(document.documentElement.classList).toContain('dark-mode');

    store.commit(TOGGLE_DARK_MODE);

    expect(document.documentElement.classList).not.toContain('dark-mode');
  });
});
