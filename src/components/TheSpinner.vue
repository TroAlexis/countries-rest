<template>
  <div class="spinner">
    <GlobeIcon class="spinner__icon"/>
  </div>
</template>
<script>
import { GlobeIcon } from '@heroicons/vue/outline';

export default {
  name: 'Spinner',
  components: { GlobeIcon },
};
</script>
<style lang="scss">
$card-gap: 20;

.spinner {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  &__icon {
    @include scut-size(scut-em(80));
    opacity: 0.8;
    animation: rotate3d 2s infinite;

    path {
      stroke-width: 1.25;
    }
  }

}

@keyframes rotate3d {
  0% {
    transform: rotate3d(0, 1, 0, 0deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}
</style>
