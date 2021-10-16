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
import BaseSelect from '@/components/Base/BaseSelect/BaseSelect.vue';
import { useStore } from 'vuex';
import { computed, toRefs, watch } from 'vue';
import useCountriesFilterValue from '@/composables/useCountriesFilterValue';

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
  setup(props, { emit }) {
    const { by: filterBy } = toRefs(props);
    const store = useStore();
    const regions = computed(() => store.state.regions);

    const filter = {
      key: filterBy.value,
      value: '',
      func: (country, value) => country[filterBy.value] === value,
    };

    const { filterValue } = useCountriesFilterValue(filter, filterBy.value);

    watch(filterValue, (value) => {
      emit('select', value);
    });

    return {
      filter: filterValue,
      regions,
    };
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
