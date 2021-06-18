<template>
  <BaseSelect
    class="filter-select"
    :options="regions"
    v-model:selected="filter"
  >
    <template #placeholder>{{selected || `Filter by ${by}`}}</template>
  </BaseSelect>
</template>

<script>
import BaseSelect from '@/components/Select/BaseSelect/BaseSelect.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'RegionSelect',
  components: { BaseSelect },
  props: {
    by: {
      type: String,
      default() {
        return 'region';
      },
    },
  },
  computed: {
    ...mapState(['regions']),
    ...mapState('countries', { filterFromState: 'filter' }),
    filter: {
      get() {
        return this.filter;
      },
      set(value) {
        this.updateFilter({
          prop: this.by,
          val: value,
        });
      },
    },
  },
  methods: {
    ...mapActions('countries', ['updateFilter']),
  },
};
</script>

<style lang="scss">
.filter-select {
  flex-basis: scut-em(250);
  min-width: 0;
  //font-size: scut-rem(18);
}
</style>
