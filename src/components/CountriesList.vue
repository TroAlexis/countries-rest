<template>
  <Spinner v-if="loading"/>
  <div class="countries-list" v-else>
    <transition-group
      tag="ul"
      name="tile"
      ref="countries"
      class="countries-list__wrapper"
    >
      <li class="countries-list__item"
                   v-for="({name, flags, area, capital = [], region}, index) in countriesLimited"
                   :key="name.common"
      >
        <router-link :to="name.common.toLowerCase()" class="countries-list__item-wrapper">
          <CountryCard
            class="countries-list__card"
            :flag="flags[0]"
            :area="area"
            :capital="capital[0]"
            :region="region"
            :style="{transitionDelay: `${index * 15}ms`}"
            :name="name.common"
          />
        </router-link>
      </li>
    </transition-group>
    <Pagination
      :pages="getPages"
      :current-page="currentPage"
      @update:current-page="$emit('update:currentPage', $event)"
      class="countries-list__pagination"
    />
  </div>
</template>

<script>
import {
  useStore,
} from 'vuex';
import CountryCard from '@/components/CountryCard/CountryCard.vue';
import Spinner from '@/components/TheSpinner.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import { computed, ref } from 'vue';

export default {
  name: 'CountriesList',
  components: { Pagination, Spinner, CountryCard },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const store = useStore();
    const showMax = ref(12);
    const loading = computed(() => store.state.countries.loading);
    const filteredCountries = computed(() => store.getters['countries/filteredCountries']);
    const countriesLimited = computed(() => filteredCountries.value.slice(
      (showMax.value * props.currentPage) - showMax.value,
      showMax.value * props.currentPage,
    ));
    const getPages = computed(() => Math.ceil(filteredCountries.value.length / showMax.value));
    const hasCountriesStored = computed(() => !!filteredCountries.value.length);

    if (!hasCountriesStored.value) {
      store.dispatch('countries/fetchCountries');
    }

    return {
      showMax,
      loading,
      countriesLimited,
      getPages,
    };
  },
};
</script>

<style lang="scss">
$card-gap: 20;

@import "~@/components/Pagination/Pagination";

.countries-list {
  @include scut-margin(n scut-em(-16));
  padding: scut-em($content-py) scut-em(16);
  overflow: hidden;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: scut-em(-$card-gap);
  }
  &__item {
    display: flex;
    flex-basis: scut-em(250);
    margin: scut-em($card-gap);
    transform: translateY(0);
    transition: transform .3s;

    &:hover {
      transform: translateY(-.15rem);
    }
  }

  &__item-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    color: inherit;
    text-decoration: none;
  }

  &__card {
    flex: 1;
  }

  &__pagination {
    margin-top: scut-em(60) - scut-em($p-y);
  }
}
</style>
