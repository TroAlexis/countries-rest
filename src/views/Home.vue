<template>
  <main class="home">
    <Wrapper class="home__wrapper">
      <form @submit.prevent="" class="controls">
        <SearchBar class="controls__search"/>
        <RegionSelect/>
      </form>
      <CountriesList/>
    </Wrapper>
  </main>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import SearchBar from '@/components/SearchBar.vue';
import RegionSelect from '@/components/RegionSelect.vue';
import CountriesList from '@/components/CountriesList.vue';

export default {
  name: 'Home',
  components: {
    CountriesList,
    RegionSelect,
    SearchBar,
    Wrapper,
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
