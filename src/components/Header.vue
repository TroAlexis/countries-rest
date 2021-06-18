<template>
  <header class="header">
    <Wrapper class="header__wrapper">
      <h1 class="header__logo">
        <router-link to="/">Where in the world?</router-link>
        <GlobeIcon class="header__logo-icon"/>
      </h1>
      <ModeToggle/>
    </Wrapper>
  </header>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import ModeToggle from '@/components/ModeToggle.vue';
import { GlobeIcon } from '@heroicons/vue/outline';

export default {
  name: 'Header',
  components: { ModeToggle, Wrapper, GlobeIcon },
};
</script>

<style lang="scss">
$icon-size: 24;
$icon-transition-time: 0.3s;
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
    $_logo: &;
    position: relative;
    font-weight: 700;
    font-size: scut-rem(24);

    a {
      color: inherit;
      text-decoration: none;

      &:focus,
      &:active {
        outline: none;

        ~#{$_logo}-icon {
          transform: translate(125%, -50%) rotate(0deg);
          visibility: visible;
          opacity: 1;
        }
      }
    }

    &:hover {
      #{$_logo}-icon {
        transform: translate(125%, -50%) rotate(0deg);
        visibility: visible;
        opacity: 1;
      }
    }
    @include transition-clicked;

    &-icon {
      position: absolute;
      top: 50%;
      right: 0;
      width: scut-em($icon-size);
      height: scut-em($icon-size);
      transform: translate(100%, -50%) rotate(-45deg);
      visibility: hidden;
      opacity: 0;
      transition:
        visibility $icon-transition-time,
        opacity $icon-transition-time,
        transform $icon-transition-time;
    }
  }
}
</style>
