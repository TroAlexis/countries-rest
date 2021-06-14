<template>
  <BaseSelect class="filter-select">
    <template #placeholder>Filter by region</template>
  </BaseSelect>
</template>

<script>
import BaseSelect from '@/components/Select/BaseSelect.vue';

export default {
  name: 'FilterSelect',
  components: { BaseSelect },
  props: {
    by: {
      type: String,
      default() {
        return 'region';
      },
    },
  },
};
</script>

<style lang="scss">
.filter-select {
  display: inline-flex;
  align-items: center;
  //font-size: scut-rem(18);
}
</style>
