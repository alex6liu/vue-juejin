<template>
  <div class="view-container">
    <Header />
    <Recommend />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Recommend from '@/components/Recommend.vue';

export default {
  name: 'home',
  components: {
    Header,
    Recommend,
  },
};
</script>
