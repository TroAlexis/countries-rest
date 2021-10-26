import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useDarkMode() {
  const store = useStore();
  const darkMode = computed(() => store.state.darkMode);
  const toggleDarkMode = () => { store.dispatch('toggleDarkMode'); };
  const setDarkMode = (payload) => { store.dispatch('setDarkMode', payload); };

  return {
    darkMode,
    toggleDarkMode,
    setDarkMode,
  };
}
