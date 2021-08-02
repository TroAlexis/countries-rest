<template>
  <component :is="tag" class="input-box-base">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseInputBox',
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
};
</script>

<style lang="scss">
@import 'BaseInputBox';

.input-box-base {
  color: inherit;
  font: inherit;
  background-color: var(--bg-color-secondary);
  border: $input-border;
  border-radius: #{$input-radius}px;
  box-shadow: $shadow-lg;
  transition: background-color $mode-transition-time,
  box-shadow $focus-transition-time,
  border-color $focus-transition-time;

  &:focus,
  &:active,
  &:hover {
    border-color: rgba(35, 35, 35, 0.25);
    outline: none;
    box-shadow: $shadow-xl;

  }
}
</style>
