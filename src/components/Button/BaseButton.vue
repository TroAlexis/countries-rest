<template>
<button type="button" class="button-base">
  <slot name="icon"></slot>
  <slot name="content">
    Click me!
  </slot>
</button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss">
.button-base {
  display: inline-flex;
  font-family: inherit;
}
</style>
