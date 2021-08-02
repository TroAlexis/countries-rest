<template>
  <Spinner v-if="loading"/>
  <div class="countries-list" v-else>
    <transition-group
      tag="ul"
      ref="list"
      appear name="tile"
      class="countries-list__wrapper"
    >
      <CountryCard
        class="countries-list__card"
        v-for="(country, index) in countriesLimited"
        :key="country.name"
        :flag="country.flag"
        :population="country.population"
        :capital="country.capital"
        :region="country.region"
        :style="{transitionDelay: `${index * 15}ms`}"
        :name="country.name"
      />
    </transition-group>
    <Pagination
      :pages="getPages"
      v-model:current-page="currentPage"
      class="countries-list__pagination"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import CountryCard from '@/components/CountryCard/CountryCard.vue';
import Spinner from '@/components/Spinner.vue';
import Pagination from '@/components/Pagination/Pagination.vue';

export default {
  name: 'CountriesList',
  components: { Pagination, Spinner, CountryCard },
  data() {
    return {
      showMax: 12,
      currentPage: 1,
    };
  },
  watch: {
    getPages() {
      this.currentPage = 1;
    },
  },
  computed: {
    ...mapState('countries', { loading: 'loading' }),
    ...mapGetters('countries', ['filteredCountries']),
    countriesLimited() {
      return this.filteredCountries.slice(
        (this.showMax * this.currentPage) - this.showMax,
        this.showMax * this.currentPage,
      );
    },
    getPages() {
      return Math.ceil(this.filteredCountries.length / this.showMax);
    },
  },
  methods: {
    ...mapActions('countries', ['fetchCountries']),
  },
  created() {
    this.fetchCountries();
  },
};
</script>

<style lang="scss">
$card-gap: 20;

@import "~@/components/Pagination/Pagination";

.countries-list {
  @include scut-margin(n scut-em(-16));
  padding: scut-em(50) scut-em(16);
  overflow: hidden;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: scut-em(-$card-gap);
  }
  &__card {
    flex-basis: scut-em(250);
    margin: scut-em($card-gap);
  }

  &__pagination {
    margin-top: scut-em(60) - scut-em($p-y);
  }
}
</style>
