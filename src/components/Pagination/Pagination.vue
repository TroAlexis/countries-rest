<template>
  <div class="pagination">
    <ol class="pagination__wrapper">
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
  </div></template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: Number,
    currentPage: Number,
  },
};
</script>

<style lang="scss">
@import 'Pagination';

.pagination {
  overflow: hidden;
  @include scut-padding(scut-em($p-y));

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: scut-em(-$page-margin);
  }

  &__page {
    display: flex;
    flex-basis: scut-em($page-size);
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    max-width: scut-em($page-size);
    height: scut-em($page-size);
    margin: scut-em($page-margin);
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

    &--current {
      background-color: var(--bg-color-accent-sharp);
      border: 0;
    }
  }
  //
}
</style>
