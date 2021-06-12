<template>
  <BaseButton class="mode-toggle" @click.prevent="toggleDarkMode">
    <template #icon>
      <MoonIcon class="mode-toggle__icon"></MoonIcon>
    </template>
    <template #content>
      <span class="mode-toggle__text">dark mode</span>
    </template>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/Button/BaseButton.vue';
import { MoonIcon } from '@heroicons/vue/outline';

import { mapActions, mapState } from 'vuex';

export default {
  name: 'ModeToggle',
  components: {
    BaseButton,
    MoonIcon,
  },
  computed: {
    ...mapState(['darkMode']),
  },
  methods: {
    ...mapActions([
      'toggleDarkMode',
    ]),
  },
};
</script>

<style lang="scss">
$icon-size: 20;
$icon-gap: 10;

.mode-toggle {
  color: inherit;
  font-size: scut-rem(16);
  align-items: center;
  @include scut-padding(scut-em(5) scut-em(5));
  border: 0;
  background: none;
  cursor: pointer;
  &__icon {
    width: scut-em($icon-size);
    height: scut-em($icon-size);
    margin-right: scut-em($icon-gap);

    path {
      stroke-width: 2;
      transition: stroke-width 0.5s;
    }

    &:hover {
      path {
        stroke-width: 2.5;
      }
    }
  }

  &__text {
    letter-spacing: 0.03em;
    text-transform: capitalize;
    font-weight: 600;
    font-size: scut-em(16);
  }
}
</style>
