<template>
  <main class="country">
    <Wrapper class="home__wrapper">
      <Spinner v-if="loading"/>
      <CountryDetail v-else
        v-bind="country"
      />
    </Wrapper>
  </main>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import Spinner from '@/components/TheSpinner.vue';
import CountryDetail from '@/components/CountryDetail/CountryDetail.vue';
import { mapState } from 'vuex';

const countrySchema = [
  { key: 'name', getter: getCountryName },
  { key: 'nativeName', getter: getCountryNativeName },
  { key: 'flag', getter: getCountryFlag },
  { key: 'area' },
  { key: 'population' },
  { key: 'region' },
  { key: 'subregion' },
  { key: 'capital', getter: getCountryCapital },
  { key: 'tld', getter: getCountryTopLevelDomain },
  { key: 'currencies', getter: getCountryCurrencies },
  { key: 'languages', getter: getCountryLanguages },
  { key: 'mapLink', getter: getMapLink },
];

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
      const country = await this.getCountry();
      this.country = this.getFormattedCountry(country);
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
    getFormattedCountry(country) {
      return countrySchema.reduce((obj, property) => {
        // eslint-disable-next-line no-param-reassign
        obj[property.key] = property.getter
          ? property.getter(country)
          : country[property.key];

        return obj;
      }, {});
    },
  },
};

function getCountryName(country) {
  return country.name?.common;
}

function getCountryNativeName(country) {
  const nativeNames = country.name?.nativeName;
  if (!nativeNames) {
    return null;
  }
  const [nativeName] = Object.values(nativeNames) || [];
  return nativeName?.official || nativeName?.common;
}
function getCountryFlag(country) {
  const [flag] = country.flags || [];
  return flag;
}
function getCountryCapital(country) {
  const [capital] = country.capital || [];
  return capital;
}
function getCountryTopLevelDomain(country) {
  const [tld] = country.tld || [];
  return tld;
}
function getCountryCurrencies(country) {
  const { currencies = {} } = country;
  return Object.values(currencies);
}
function getCountryLanguages(country) {
  const { languages = {} } = country;
  return Object.values(languages);
}
function getMapLink(country) {
  const { maps = {} } = country;
  const [mapLink] = Object.values(maps);
  return mapLink;
}
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
