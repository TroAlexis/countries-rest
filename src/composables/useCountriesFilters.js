import { useStore } from 'vuex';
import { computed } from 'vue';

export default function useCountriesFilters(filter) {
  const store = useStore();
  const filters = computed(() => store.state.countries.filters);
  store.dispatch('countries/updateFilter', filter);

  return {
    filters,
  };
}
