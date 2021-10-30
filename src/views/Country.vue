<template>
  <main class="country">
    <Wrapper class="home__wrapper">
      <Spinner v-if="loading" />
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
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import {
  getCountryName,
  getCountryNativeName,
  getCountryFlag,
  getCountryCapital,
  getCountryTopLevelDomain,
  getCountryCurrencies,
  getCountryLanguages,
  getMapLink,
} from '@/helpers/country';
import { ref } from 'vue';

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
  setup() {
    const route = useRoute();
    const store = useStore();
    const loading = ref(true);
    const countries = store.state.countries.data;
    const countryName = route.params.name;
    const country = ref(null);

    fetchCountry();

    async function fetchCountry() {
      try {
        country.value = await getCountry();
        country.value = getFormattedCountry(country.value);
        loading.value = false;
      } catch (e) {
        loading.value = true;
        console.error(e);
      }
    }

    async function getCountry() {
      const countryFromStore = getCountryFromStore(countryName);
      if (countryFromStore) {
        return countryFromStore;
      }
      const [countryFromApi] = await getCountryFromApi(countryName);
      return countryFromApi;
    }

    function getCountryFromStore(name) {
      return countries.find((countryItem) => countryItem.name?.common.toLowerCase() === name);
    }

    function getCountryFromApi(name) {
      return fetch(`https://restcountries.com/v3/name/${name}`).then((res) => res.json());
    }

    function getFormattedCountry(countryItem) {
      return countrySchema.reduce((obj, property) => {
        // eslint-disable-next-line no-param-reassign
        obj[property.key] = property.getter
          ? property.getter(countryItem)
          : countryItem[property.key];

        return obj;
      }, {});
    }

    return {
      loading,
      country,
    };
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
