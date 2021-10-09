import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useCountriesFilterValue(filters, filterBy) {
  const store = useStore();

  const filterValue = computed({
    get: () => filters[filterBy]?.value,
    set: (value) => store.dispatch('countries/updateFilter', {
      key: filterBy,
      value,
    }),
  });

  return {
    filterValue,
  };
}
