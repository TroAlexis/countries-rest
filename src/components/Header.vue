<template>
  <header class="header">
    <Wrapper class="header__wrapper">
      <h1 class="header__logo"><router-link to="/">Where in the world?</router-link></h1>
      <ModeToggle/>
    </Wrapper>
  </header>
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
  background: var(--bg-color-secondary);
  box-shadow: $shadow-lg;
  transition: background-color $mode-transition-time;

  &__wrapper {
    @include scut-padding(scut-rem(20) n);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 700;
    font-size: scut-rem(24);
    letter-spacing: 0.02em;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
