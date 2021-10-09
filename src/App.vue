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

export default {
  components: { Header },
};
</script>
