<template>
  <Header/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
import Header from '@/components/TheHeader.vue';
import useDarkMode from '@/composables/useDarkMode';

export default {
  components: { Header },
  setup() {
    const { setDarkMode } = useDarkMode();

    setDarkModeFromLocalStorage();

    function setDarkModeFromLocalStorage() {
      const darkMode = localStorage.getItem('darkMode');
      const isDarkModeSet = darkMode === 'true' || darkMode === 'false';
      const isDarkMode = darkMode === 'true';
      if (isDarkModeSet) {
        setDarkMode(isDarkMode);
      }
    }
  },
};
</script>
