<template>
    <article class="country-card">
      <div class="country-card__flag" :style="{backgroundImage: `url(${flag})`}"></div>
      <h1 class="country-card__title">{{name}}</h1>
      <ul class="country-card__details">
        <li class="country-card__detail" v-for="feature in features" :key="feature.label">
          <strong>{{ feature.label }}: </strong>
          {{ feature.text }}
        </li>
      </ul>
    </article>
</template>

<script>
import { getCountryFeature } from '@/helpers/getCountryFeature';
import capitalize from 'lodash.capitalize';
import formatters from '@/helpers/countryFormatters';

export default {
  name: 'CountryCard',
  props: {
    flag: String,
    name: String,
    area: Number,
    region: String,
    capital: String,
  },
  setup(props) {
    const featureNames = ['area', 'region', 'capital'];
    const features = featureNames.map((name) => (
      getCountryFeature({
        country: props,
        label: capitalize(name),
        path: name,
        formatter: formatters[name],
      })
    ));

    return {
      features,
    };
  },
};
</script>

<style lang="scss">
@import 'CountryCard';

.country-card {
  overflow: hidden;
  background-color: var(--bg-color-secondary);
  border-radius: 10px;
  box-shadow: $shadow-xl;
  @include transition-bg();
  &__flag {
    width: 100%;
    height: scut-em(150);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 100%;
    box-shadow: $shadow-inner;
  }

  &__title,
  &__details {
    @include scut-padding(n scut-em($p-x));
  }
  &__title {
    @include scut-padding(scut-em($p-y) n n n);
    font-weight: 700;
  }
  &__details {
    margin-top: scut-em(20);
    @include scut-padding(n n scut-em($p-y) n);

    strong {
      font-weight: 600;
    }
  }

  &__detail {
    &+& {
      margin-top: scut-em(8);
    }
  }
}
</style>
