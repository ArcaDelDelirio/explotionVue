<template>
  <div class="about">
    <NavBar />
    <h1>List of Movies</h1>
    <button @click="getAllMovies">All movies</button>
    <div v-if="dataApi.hasOwnProperty('0')">{{dataApi}}</div>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'about',
  components: {
    NavBar,
  },
  data() {
    return {
      dataApi: {},
    };
  },
  methods: {
    getAllMovies() {
      return fetch(' https://damp-falls-68291.herokuapp.com/movies/get-movies')
        .then(res => res.json())
        .then(response => (this.dataApi = response))
        .catch(error => (this.dataApi = error));
    },
  },
};
</script>