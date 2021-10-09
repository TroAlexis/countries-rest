<template>

<ul class="base-select-options"
>
  <li v-for="option in options"
       :class="[
         'base-select-options__option',
       ]"
      :key="option"
      @click="$emit('option-selected', option)"
      @keyup.enter="$emit('option-selected', option)"
      tabindex="0"
  >
    {{ option }}
  </li>
</ul>

</template>

<script>
export default {
  name: 'BaseSelectOptions',
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
};
</script>

<style lang="scss">
@import "~@/components/Base/BaseInputBox/BaseInputBox";
@import "BaseSelect";

.base-select-options {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg-color-secondary);
  border: $input-border;
  border-radius: #{$radius-global}px;
  @include transition-bg;

  &__option {
    padding-top: scut-em($p-y);
    cursor: pointer;
    @include truncate;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--bg-color-accent);
      outline: none;
    }
    &+& {
      //margin-top: scut-em(5);
    }
    @include scut-padding(scut-em($p-y) scut-em($p-x));
  }
//
}
</style>
