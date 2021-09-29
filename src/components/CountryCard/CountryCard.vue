<template>
    <article class="country-card">
      <div class="country-card__flag" :style="{backgroundImage: `url(${flag})`}"></div>
      <h1 class="country-card__title">{{name}}</h1>
      <ul class="country-card__details">
        <li class="country-card__detail" v-for="detail in details" :key="detail">
          <strong>{{ detail.name }}: </strong>
          {{detail.data}}
        </li>
      </ul>
    </article>
</template>

<script>
import numberWithCommas from '@/helpers/numbers';

export default {
  name: 'CountryCard',
  props: {
    flag: String,
    name: String,
    area: Number,
    region: String,
    capital: String,
  },
  computed: {
    details() {
      return [
        {
          name: 'Area',
          data: `${numberWithCommas(this.area)} km²`,
        }, {
          name: 'Region',
          data: this.region,
        }, {
          name: 'Capital',
          data: this.capital,
        },
      ];
    },
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
