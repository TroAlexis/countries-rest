<template>
  <article class="country-detail">
    <aside class="country-detail__aside">
      <Button class="country-detail__back" @click="$router.back">
        <template #icon>
          <ArrowLeftIcon class="country-detail__back-icon" />
        </template>
        <template #content>
          Back
        </template>
      </Button>
    </aside>
    <section class="country-detail__content">
      <img
        :src="flag"
        :alt="`${name} flag`"
        class="country-detail__flag"
      >
      <div class="country-detail__info">
        <h2 class="country-detail__heading h4-like">{{ name }}</h2>
        <div class="country-detail__features-wrap">
          <ul class="country-detail__features">
            <li
              v-for="feature in $options.$static.features"
              :key="feature.key"
              class="country-detail__feature"
            >
              <span class="fw-600">{{ feature.label }}: </span>
              <span>{{ getNormalizedFeatureText(feature) }}</span>
            </li>
          </ul>
        </div>
        <Button tag="a" target="blank" :href="mapLink" class="country-detail__map-button">
          <template #content>
            <span class="fw-600">View on map</span>
          </template>
          <template #icon>
            <LocationMarkerIcon />
          </template>
        </Button>
      </div>
    </section>
  </article>
</template>

<script>
import { ArrowLeftIcon, LocationMarkerIcon } from '@heroicons/vue/solid';
import Button from '@/components/Button/Button.vue';
import getTextWithDefault from '@/helpers/text';

export default {
  name: 'CountryDetail',
  components: { Button, ArrowLeftIcon, LocationMarkerIcon },
  props: {
    name: String,
    nativeName: String,
    flag: String,
    area: Number,
    population: Number,
    region: String,
    subregion: String,
    capital: String,
    tld: String,
    currencies: {
      type: Array,
      default: () => [],
    },
    languages: {
      type: Array,
      default: () => [],
    },
    mapLink: String,
  },
  emits: ['back'],
  $static: {
    features: [
      { label: 'Native Name', key: 'nativeName' },
      { label: 'Area', key: 'area', formatter: (text) => `${text} km²` },
      { label: 'Population', key: 'population' },
      { label: 'Region', key: 'region' },
      { label: 'Sub Region', key: 'subregion' },
      { label: 'Capital', key: 'capital' },
      { label: 'Top Level Domain', key: 'tld' },
      { label: 'Currencies', key: 'currencies', itemKey: 'name' },
      { label: 'Languages', key: 'languages' },
    ],
  },
  methods: {
    getFeatureText(feature) {
      const { key, itemKey } = feature;
      const featureProp = this[key];
      if (!Array.isArray(featureProp)) {
        return featureProp;
      }
      if (itemKey) {
        return featureProp.map((item) => item[itemKey]).join(', ');
      }
      return featureProp.join(', ');
    },
    getNormalizedFeatureText(feature) {
      const text = this.getFeatureText(feature);
      const formattedText = feature.formatter ? feature.formatter(text) : text;
      return getTextWithDefault(formattedText);
    },
  },
};
</script>

<style lang="scss">
  @import "CountryDetail";

  .country-detail {
    $root: &;
    &__aside {
      padding-top: scut-rem($controls-py);
    }

    &__back {
      width: 100%;
      max-width: scut-rem(150);
      font-size: scut-rem(16);

      #{$root}__back-icon {
        transform: translateX(0);
        transition: transform .3s;
      }

      &:hover #{$root}__back-icon {
        transform: translateX(-.25em);
      }
    }

    &__back-icon {
      @include scut-size(scut-em(16));
      margin-right: scut-em(8);
    }

    &__content {
      display: flex;
      justify-content: space-between;
      padding: scut-rem($content-py) 0;
      @include media("<=tablet") {
        flex-wrap: wrap;
      }
    }

    &__flag {
      flex-basis: 40%;
      align-self: flex-start;
      width: 40%;
      max-width: scut-rem(450);
      margin-right: scut-rem(30);
      box-shadow: $shadow-2xl;

      @include media("<=tablet") {
        flex-basis: 100%;
        width: 100%;
        min-height: 200px;
        margin: 0 auto scut-em(50);
      }
    }

    &__info {
      flex-basis: 100%;
      width: 100%;
      max-width: scut-rem(600);

      @include media("<=tablet") {
        max-width: none;
      }
    }

    &__heading {
      margin-bottom: scut-rem(20);

      @include media("<=tablet") {
        text-align: center;
      }
    }

    &__features-wrap {
      padding-bottom: scut-rem(50);
      overflow: hidden;
    }

    &__features {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: scut-rem(-$features-gap);
    }

    &__feature {
      flex-basis: 45%;
      width: 45%;
      margin: scut-rem($features-gap);
      line-height: 1.4;
      letter-spacing: .01em;

      @include media("<=tablet") {
        flex-basis: 100%;
        width: 100%;
      }
    }

    &__map-button {
      font-size: scut-rem(16);

      svg {
        width: 1.2em;
        height: 1.2em;
        margin-right: .5em;
        color: var(--text-color-secondary);
      }
    }
  }
</style>
