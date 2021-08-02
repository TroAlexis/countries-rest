<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
};
</script>

<style lang="scss">
.wrapper {
  @include scut-center-block(scut-rem(1232px));
  @include scut-padding(n scut-rem(16))
}
</style>
