<template>
  <BaseButton class="mode-toggle" @click.prevent="toggleDarkMode">
    <template #icon>
      <MoonIcon class="mode-toggle__icon"/>
    </template>
    <template #content>
      <span class="mode-toggle__text">dark mode</span>
    </template>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton.vue';
import { MoonIcon } from '@heroicons/vue/solid';

import useDarkMode from '@/composables/useDarkMode';

export default {
  name: 'ModeToggle',
  components: {
    BaseButton,
    MoonIcon,
  },
  setup() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return {
      darkMode,
      toggleDarkMode,
    };
  },
};
</script>

<style lang="scss">
$icon-size: 20;
$icon-gap: 10;

.mode-toggle {
  align-items: center;
  color: inherit;
  font-size: scut-rem(16);
  background: none;
  border: 0;

  cursor: pointer;
  @include scut-padding(scut-em(5) scut-em(5));
  @include transition-clicked;

  &__icon {
    width: scut-em($icon-size);
    height: scut-em($icon-size);
    margin-right: scut-em($icon-gap);

    path {
      transition: stroke-width 0.5s;
      stroke-width: 2;
    }

    &:hover {
      path {
        stroke-width: 2.5;
      }
    }
  }

  &__text {
    font-weight: 600;
    font-size: scut-em(16);
    letter-spacing: 0.03em;
    text-transform: capitalize;
    @include media('<=tablet') {
      display: none;
    }
  }
}

</style>
