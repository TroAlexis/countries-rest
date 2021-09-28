<template>
  <BaseInput class="search-bar"
    v-model:input.lazy="filter"
  >
    <template #placeholder>Search for a country...</template>
  </BaseInput>
</template>

<script>
import BaseInput from '@/components/Input/BaseInput.vue';
import { mapActions, mapState } from 'vuex';
import get from 'lodash.get';

export default {
  name: 'SearchBar.vue',
  props: {
    by: {
      type: String,
      default() {
        return 'name.common';
      },
    },
  },
  components: { BaseInput },
  computed: {
    ...mapState('countries', { filtersFromState: 'filters' }),
    filter: {
      get() {
        return this.filtersFromState[this.by].value;
      },
      set(value) {
        this.updateFilter({
          key: this.by,
          value,
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
      func: (country, value) => get(country, this.by)
        .toLowerCase()
        .includes(value.toLowerCase()),
    });
  },
};
</script>

<style lang="scss">
.search-bar {
  //font-size: scut-rem(18);
}
</style>
