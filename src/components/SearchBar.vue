<template>
  <BaseInput class="search-bar"
    v-model:input="searchedCountry"
  >
    <template #placeholder>Search for a country...</template>
  </BaseInput>
</template>

<script>
import BaseInput from '@/components/Input/BaseInput.vue';

export default {
  name: 'SearchBar.vue',
  components: { BaseInput },
  data() {
    return {
      searchedCountry: '',
    };
  },
};
</script>

<style lang="scss">
.search-bar {
  //font-size: scut-rem(18);
}
</style>
