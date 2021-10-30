<template>
<component :is="tag" type="button" class="button-base">
  <slot name="icon"></slot>
  <slot name="content">
    Click me!
  </slot>
</component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss">
.button-base {
  display: inline-flex;
  font-family: inherit;
  cursor: pointer;
}
</style>
