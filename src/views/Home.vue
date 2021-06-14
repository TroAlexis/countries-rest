<template>
  <main class="home">
    <Wrapper class="home__wrapper">
      <form @submit.prevent="" class="controls">
        <SearchBar class="controls__search"/>
        <FilterSelect/>
      </form>
    </Wrapper>
  </main>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import SearchBar from '@/components/SearchBar.vue';
import FilterSelect from '@/components/FilterSelect.vue';

export default {
  name: 'Home',
  components: {
    FilterSelect, SearchBar, Wrapper,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/index.scss";

.home {
//
}

.controls {
  display: flex;
  justify-content: space-between;
  padding-top: scut-rem(50);

  &__search {
    flex-basis: scut-em(400);
  }
}

</style>
