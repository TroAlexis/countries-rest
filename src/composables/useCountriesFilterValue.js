import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useCountriesFilterValue(filter, filterBy) {
  const store = useStore();
  const filters = computed(() => store.state.countries.filters);
  store.dispatch('countries/updateFilter', filter);

  const filterValue = computed({
    get: () => filters.value[filterBy]?.value,
    set: (value) => store.dispatch('countries/updateFilter', {
      key: filterBy,
      value,
    }),
  });

  return {
    filterValue,
  };
}
