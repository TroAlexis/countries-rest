<template>
  <div
    class="pagination"
    :class="{'pagination--overflowing': isOverflowing}"
  >
    <div class="pagination__container">
      <ol
        class="pagination__wrapper"
        ref="wrapper"
      >
        <li
          v-for="page in pages"
          :class="['pagination__page', currentPage === page && 'pagination__page--current']"
          @click="$emit('update:currentPage', page)"
          :key="page"
          tabindex="0"
        >
          {{ page }}
        </li>
      </ol>
    </div>
    <div class="pagination__controls">
      <span class="pagination__control pagination__control--left">
        <ChevronLeftIcon />
      </span>
      <span class="pagination__control pagination__control--right">
        <ChevronRightIcon />
      </span>
    </div>
  </div>
</template>

<script>
import checkOverflow from '@/helpers/document';
import throttle from 'lodash.throttle';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';

async function setOverflowState() {
  await this.$nextTick();
  this.isOverflowing = checkOverflow(this.$refs.wrapper, 'x');
}

export default {
  name: 'Pagination',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    pages: Number,
    currentPage: Number,
  },
  data() {
    return {
      isOverflowing: false,
    };
  },
  watch: {
    pages: {
      handler: 'updateOverflowState',
    },
  },
  mounted() {
    this.setUpOverflowListener();
    this.updateOverflowState();
  },
  methods: {
    setUpOverflowListener() {
      window.addEventListener('resize', this.updateOverflowState);
    },
    updateOverflowState: throttle(setOverflowState, 1000),
  },
};
</script>

<style lang="scss">
@import 'Pagination';

.pagination {
  $root: &;
  $overflowing: #{$root}--overflowing;
  position: relative;
  padding: 0 scut-em($p-x);
  overflow: hidden;
  transition: padding .3s ease-out;

  &:before,
  &::after {
    position: absolute;
    top: 0;
    z-index: 2;
    display: block;
    width: scut-em($p-x * 2);
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: opacity .3s .3s ease-out;
    content: "";
  }

  &::before {
    left: scut-em($overflowing-padding);
  }

  &::after {
    right: scut-em($overflowing-padding);
    transform: rotate(180deg);
  }

  &--overflowing {
    padding: 0 scut-em($overflowing-padding);

    &::before,
    &::after {
      opacity: 1;
    }
  }

  &__container {
    position: relative;
    z-index: 1;
    @include remove-scrollbar(x);
    @include scut-padding(scut-em($p-y) n);
  }

  &__controls {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  &__control {
    @include scut-size(scut-em($control-size));
    position: absolute;
    top: 50%;
    display: inline-block;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity .3s .3s ease-out;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }

    @at-root #{$overflowing} & {
      opacity: 1;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: center;

    &::before,
    &::after {
      display: inline-block;
      flex-basis: scut-em($p-x);
      flex-shrink: 0;
      width: scut-em($p-x);
      height: 1px;
      content: "";
    }

    @at-root #{$overflowing} & {
      justify-content: flex-start;
    }
  }

  &__page {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: scut-em($page-size);
    max-width: scut-em($page-size);
    height: scut-em($page-size);
    padding: scut-em(10);
    font-weight: 600;
    font-size: scut-rem(16);
    background-color: var(--bg-color-secondary);
    border: 1px solid var(--bg-color-accent);
    border-radius: 50%;
    box-shadow: $shadow-lg;
    cursor: pointer;
    user-select: none;
    @include transition-bg;

    & + & {
      margin-left: scut-em($page-margin);
    }

    &--current {
      background-color: var(--bg-color-accent-sharp);
      border: 0;
    }
  }
  //
}
</style>
