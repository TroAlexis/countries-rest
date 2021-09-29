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
        :alt="`${country.name.common} flag`"
      >
    </section>
  </article>
</template>

<script>
import { ArrowLeftIcon } from '@heroicons/vue/solid';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'CountryDetail',
  components: { Button, ArrowLeftIcon },
  props: {
    country: {
      type: Object,
      default: () => ({}),
      validator: (country) => ['name', 'flags'].every(
        (property) => Object.keys(country).includes(property),
      ),
    },
  },
  emits: ['back'],
  computed: {
    flag() {
      return this.country?.flags?.[0];
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
  }
</style>
