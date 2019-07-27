<script>
import Footer from '@/components/Footer.vue';
import SearchBar from '@/components/SearchBar.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    SearchBar,
    Footer,
  },
  data() {
    return {
      movie: {},
    };
  },
};
</script>


<template>
  <div class="home">
    <NavBar />
    <SearchBar />
    <Footer />
  </div>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 7vh 81vh 12vh;
  height: 100%;
}
</style>