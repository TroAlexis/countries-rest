<template>
  <main class="country">
    <Wrapper class="home__wrapper">
      <Spinner v-if="loading"/>
      <CountryDetail v-else
        :country="country"
      />
    </Wrapper>
  </main>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import Spinner from '@/components/Spinner.vue';
import CountryDetail from '@/components/CountryDetail/CountryDetail.vue';
import { mapState } from 'vuex';

export default {
  name: 'Country',
  components: {
    CountryDetail,
    Spinner,
    Wrapper,
  },
  data() {
    return {
      loading: true,
      country: {},
    };
  },
  async created() {
    try {
      this.country = await this.getCountry();
      this.loading = false;
    } catch (e) {
      this.loading = true;
      console.error(e);
    }
  },
  computed: {
    ...mapState('countries', {
      countries: 'data',
    }),
    countryName() {
      return this.$route.params.name;
    },
  },
  methods: {
    getCountryFromStore(name) {
      return this.countries
        .find((country) => country.name?.common.toLowerCase() === name);
    },
    getCountryFromApi(name) {
      return fetch(`https://restcountries.com/v3/name/${name}`).then((res) => res.json());
    },
    async getCountry() {
      const countryFromStore = this.getCountryFromStore(this.countryName);
      if (countryFromStore) {
        return countryFromStore;
      }
      const [countryFromApi] = await this.getCountryFromApi(this.countryName);
      return countryFromApi;
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/index.scss";

  .country {
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

</style>
