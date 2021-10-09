<template>
  <BaseInput class="search-bar"
    v-model:input="filterValue"
  >
    <template #placeholder>Search for a country...</template>
  </BaseInput>
</template>

<script>
import BaseInput from '@/components/Base/BaseInput.vue';
import { toRefs, watch } from 'vue';
import useCountriesFilters from '@/composables/useCountriesFilters';
import useCountriesFilterValue from '@/composables/useCountriesFilterValue';
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
  setup(props, { emit }) {
    const { by: filterBy } = toRefs(props);

    const filter = {
      key: filterBy.value,
      value: '',
      func: (country, value) => get(country, filterBy.value)
        .toLowerCase()
        .includes(value.toLowerCase()),
    };

    const { filters } = useCountriesFilters(filter);
    const { filterValue } = useCountriesFilterValue(filters, filterBy.value);

    watch(filterValue, () => emit('input'));

    return {
      filters,
      filterValue,
    };
  },
};
</script>

<style lang="scss">
.search-bar {
  //font-size: scut-rem(18);
}
</style>
