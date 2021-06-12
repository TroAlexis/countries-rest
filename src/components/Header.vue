<template>
  <div class="header">
    <Wrapper class="header__wrapper">
      <h1 class="header__logo">Where in the world?</h1>

      <ModeToggle/>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import ModeToggle from '@/components/ModeToggle.vue';

export default {
  name: 'Header',
  components: { ModeToggle, Wrapper },
};
</script>

<style lang="scss">
//
.header {
  box-shadow: $shadow-lg;
  background: var(--bg-color-secondary);
  transition: background-color $mode-transition-time;

  &__wrapper {
    @include scut-padding(scut-rem(20) n);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: scut-rem(24);
    font-weight: 700;
    letter-spacing: 0.02em;
  }
}
</style>
