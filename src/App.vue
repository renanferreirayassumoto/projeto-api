<template>
  <v-app>
    <v-main>
      <Header />
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Home from '../src/pages/Home.vue'

export default {
  name: 'App',

  components: {
    Header,
    Home
  },

  data: () => ({
    //
  }),
}
</script>
