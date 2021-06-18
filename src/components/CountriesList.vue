<template>
  <div v-if="loading">Loading...</div>
  <div class="countries-list" v-else>
    <ul class="countries-list__wrapper">
      <CountryCard
        class="countries-list__card"
        v-for="country in filteredCountries"
        :key="country.name"
        :flag="country.flag"
        :population="country.population"
        :capital="country.capital"
        :region="country.region"
        :name="country.name"
      />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import CountryCard from '@/components/CountryCard/CountryCard.vue';

export default {
  name: 'CountriesList',
  components: { CountryCard },
  computed: {
    ...mapState('countries', { loading: 'loading' }),
    ...mapGetters('countries', ['filteredCountries']),
  },
  methods: mapActions('countries', ['fetchCountries']),
  created() {
    this.fetchCountries();
  },
};
</script>

<style lang="scss">
$card-gap: 20;

.countries-list {
  @include scut-margin(scut-em(50) scut-em(-16));
  padding: 0 scut-em(16);
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
}
</style>
