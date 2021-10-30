import { ref } from 'vue';

export default function useActive(isActive = false) {
  const active = ref(isActive);

  const toggle = () => {
    active.value = !active.value;
  };

  const disable = () => {
    active.value = false;
  };

  return {
    active,
    toggle,
    disable,
  };
}
