<template>
  <BaseSelect
    class="filter-select"
    :options="regions"
    v-model:selected="filter"
  >
    <template #placeholder>{{filter || `Filter by ${by}`}}</template>
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
    ...mapState('countries', { filtersFromState: 'filters' }),
    filter: {
      get() {
        return this.filtersFromState[this.by].value;
      },
      set(value) {
        this.updateFilter({
          key: this.by,
          value: value === 'All' ? '' : value,
        });
      },
    },
  },
  methods: {
    ...mapActions('countries', ['updateFilter']),
  },
  created() {
    this.updateFilter({
      key: this.by,
      value: '',
      func: (country, value) => country[this.by] === value,
    });
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
