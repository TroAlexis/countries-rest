<template>
  <main class="home">
    <Wrapper class="home__wrapper">
      <form @submit.prevent="" class="controls">
        <SearchBar class="controls__search" @input="resetCurrentPage"/>
        <RegionSelect @select="resetCurrentPage" class="controls__select" />
      </form>
      <CountriesList v-model:current-page="currentPage" />
    </Wrapper>
  </main>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import SearchBar from '@/components/SearchBar.vue';
import RegionSelect from '@/components/RegionSelect.vue';
import CountriesList from '@/components/CountriesList.vue';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    CountriesList,
    RegionSelect,
    SearchBar,
    Wrapper,
  },
  setup() {
    const currentPageBase = 1;
    const currentPage = ref(currentPageBase);

    const resetCurrentPage = () => {
      currentPage.value = currentPageBase;
    };

    return {
      currentPage,
      resetCurrentPage,

    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/index.scss";

.home {
  display: flex;
  flex: 1;
  flex-direction: column;

  &__wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
  }
}

.controls {
  display: flex;
  justify-content: space-between;
  padding-top: scut-rem($controls-py);
  font-size: 16px;
  @include media("<=tablet") {
    flex-wrap: wrap;
  }

  &__search {
    flex-basis: scut-em(400);
    margin-right: scut-rem(20);
    @include media("<=tablet") {
      flex-basis: 100%;
      margin-right: 0;
      margin-bottom: scut-rem(10);
    }
  }

  &__select {
    @include media("<=tablet") {
      flex-basis: 100%;
    }
  }
}

</style>
