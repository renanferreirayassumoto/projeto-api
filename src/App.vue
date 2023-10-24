<template>
  <v-app>
    <v-main>
      <Header />
      <Home />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Home from '../src/pages/Home.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Home,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>
