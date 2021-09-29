<template>
<BaseButton class="button">
  <template v-for="slotName in ['icon', 'content']"
            v-slot:[slotName]
  >
    <slot :name="slotName" />
  </template>
</BaseButton>
</template>

<script>
import BaseButton from '@/components/Button/BaseButton.vue';

export default {
  name: 'Button',
  components: { BaseButton },
};
</script>

<style lang="scss">
.button {
  align-items: center;
  justify-content: center;
  padding: scut-em(8) scut-em(16);
  color: inherit;
  background-color: var(--bg-color-primary);
  border: 0;
  border-radius: 6px;
  box-shadow: $shadow-lg;
  @include transition-clicked(
      (background-color $mode-transition-time, box-shadow .3s)
  );

  &:hover {
    box-shadow: $shadow-xl;
  }
}
</style>
