<template>
  <label class="input-base">
    <BaseInputBox
      tag="input"
      type="text"
      @input="$emit('update:input', $event.target.value)"
      class="input-base__input"
      placeholder="Search"
    />
    <span class="input-base__placeholder">
      <slot name="placeholder">
        Search
      </slot>
    </span>
    <span class="input-base__icon-wrapper">
      <slot name="icon">
        <SearchIcon class="input-base__icon"/>
      </slot>
    </span>
  </label>
</template>

<script>
import { SearchIcon } from '@heroicons/vue/solid';
import BaseInputBox from '@/components/Base/BaseInputBox/BaseInputBox.vue';

export default {
  name: 'BaseInput',
  components: {
    BaseInputBox,
    SearchIcon,
  },
  props: {
    input: {
      type: String,
      default() {
        return '';
      },
    },
  },
};
</script>

<style lang="scss">
@import '~@/components/Base/BaseInputBox/BaseInputBox.scss';

$search-transition-delay: 0.05s;
$placeholder-transiton-delay: $focus-transition-time - 0.2s;

$left-p: 40;
$icon-size: 25;
$icon-color: #797979;

$visuals-opacity: 0.55;

@mixin search-transition($root) {
  ~#{$root}__icon-wrapper {
    transform: translateX(100%);

    #{$root}__icon {
      transform: translateX(-175%) translateY(-50%);
      opacity: $visuals-opacity - 0.2;
      @at-root .dark-mode & {
        opacity: 1;
      }
    }
  }
}

@mixin placeholder-transition($root) {
  ~#{$root}__placeholder {
        transform: translateX(100%) translateY(-50%);
        opacity: 0;
        transition-delay: 0s, 0s;
  }
}

.input-base {
  $root: &;
  position: relative;
  display: inline-flex;
  &__input {
    flex: 1;
    //font-size: inherit;
    //font-family: $font-family;
    @include scut-padding(scut-em(20) scut-em(40) scut-em(20) scut-em(10));

    &::placeholder {
      opacity: 0;
    }

    &:not(:placeholder-shown) {
        @include search-transition($root);
        @include placeholder-transition($root);
    }

    &:focus,
    &:active {
      &:placeholder-shown {
        @include search-transition($root)
      }

      @include placeholder-transition($root);
    }

  }

  &__placeholder {
    position: absolute;
    top: 50%;
    left: scut-em($left-p);
    transform: translateY(-50%);
    opacity: $visuals-opacity;
    @at-root .dark-mode & {
      opacity: 1;
    }
    transition: transform $focus-transition-time $placeholder-transiton-delay,
    opacity $focus-transition-time $placeholder-transiton-delay;
    pointer-events: none;
  }

  &__icon {
    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform $focus-transition-time $search-transition-delay;
      pointer-events: none;
    }

    position: absolute;

    top: 50%;
    left: scut-em(10);
    width: scut-em($icon-size);
    height: scut-em($icon-size);
    transform: translateY(-50%);
    opacity: $visuals-opacity;
    @at-root .dark-mode & {
      opacity: 1;
    }
    transition:
      transform $focus-transition-time*1.25 $search-transition-delay + $focus-transition-time/5,
      opacity $focus-transition-time $search-transition-delay;

  }
}
</style>
