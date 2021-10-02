import { mount } from '@vue/test-utils';

import Vuex from 'vuex';

import ModeToggle from '@/components/ModeToggle.vue';

describe('ModeToggle.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      toggleDarkMode: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('Calls toggleDarkMode action on click', async () => {
    const wrapper = mount(ModeToggle, {
      global: {
        mocks: {
          $store: store,
        },
      },

    });
    const button = wrapper.find('.button-base');

    await button.trigger('click');

    expect(actions.toggleDarkMode).toHaveBeenCalled();
  });
});
