<template>
  <BaseInputBox class="select-base" tag="label" tabindex="0">
    <span class="select-base__placeholder">
      <slot name="placeholder">
        Select from options
      </slot>
    </span>
    <span class="select-base__icon">
      <slot name="icon">
        <ChevronDownIcon/>
      </slot>
    </span>

  </BaseInputBox>
</template>

<script>

import BaseInputBox from '@/components/Base/BaseInputBox/BaseInputBox.vue';
import { ChevronDownIcon } from '@heroicons/vue/solid/';

export default {
  name: 'BaseSelect',
  components: { BaseInputBox, ChevronDownIcon },
};
</script>

<style lang="scss">
$icon-size: 20;
$p-y: 10;
$p-x: 20;
.select-base {
  @include scut-padding(scut-em($p-y) scut-em($p-x));
  &__icon {
    @include scut-size(scut-em($icon-size));
  }

  &__placeholder {
    @include scut-margin(n scut-em($p-x * 2) n n)
  }
}
</style>
