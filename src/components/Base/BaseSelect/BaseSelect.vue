<template>
  <div class="select-base">
    <BaseInputBox
      class="select-base__label"
      tag="label" tabindex="0"
      @click="toggle"
      @keyup.enter="toggle"
      v-click-outside="disable"
    >
      <span :class="['select-base__placeholder', selected && 'select-base__placeholder--selected']">
        <slot name="placeholder">
          Select from options
        </slot>
      </span>
      <span class="select-base__icon">
        <slot name="icon">
          <ChevronDownIcon/>
        </slot>
      </span>
    </BaseInputBox>
    <transition name="select">
      <BaseSelectOptions
        class="select-base__options"
         :options="options"
        v-show="active"
        @option-selected="onOptionSelected($event)"
      />
    </transition>
  </div>
</template>

<script>

import BaseInputBox from '@/components/Base/BaseInputBox/BaseInputBox.vue';
import { ChevronDownIcon } from '@heroicons/vue/solid/';
import BaseSelectOptions from '@/components/Base/BaseSelect/BaseSelectOptions.vue';
import ClickOutside from 'vue-click-outside';
import useActive from '@/composables/useActive';

export default {
  name: 'BaseSelect',
  components: { BaseSelectOptions, BaseInputBox, ChevronDownIcon },
  directives: {
    ClickOutside,
  },
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return '';
      },
    },
  },
  setup(props, { emit }) {
    const { active, toggle, disable } = useActive();

    function onOptionSelected(payload) {
      disable();

      emit('update:selected', payload);
    }

    return {
      active,
      toggle,
      disable,
      onOptionSelected,
    };
  },
};
</script>

<style lang="scss">
@import "BaseSelect";
.select-base {
  position: relative;
  display: flex;
  cursor: pointer;
  &__label {
    display: inline-flex;
    align-items: center;
    width: 100%;
    cursor: inherit;
    user-select: none;
    @include scut-padding(scut-em($p-y) scut-em($p-x));

    &:focus,
    &:active {
      box-shadow: $shadow-lg;
    }
  }
  &__icon {
    @include scut-size(scut-em($icon-size));
  }

  &__placeholder {
    flex: 1;
    min-width: 0;
    line-height: 1.5;
    opacity: 0.55;

    &--selected {
      opacity: 1;
    }
    @include scut-margin(n scut-em($p-x * 2) n n);

    @include truncate;
  }

  &__options {
    position: absolute;
    top: 100%;
    z-index: 1;
    width: 100%;
    transform: translate(0, scut-em(10));
    cursor: default;
  }
}

.select-enter-active,
.select-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.select-enter-from,
.select-leave-to {
  transform: translateY(scut-em(-5));
  opacity: 0;
}

</style>
