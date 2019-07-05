<template>
  <div class="home">
    <NavData vue-bind:user="users" />
    <SearchData />
    <FooterData />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterData from '@/components/FooterData.vue'
import SearchData from '@/components/SearchData.vue'
import NavData from '@/components/NavData.vue'

export default {
  name: 'home',
  components: {
    NavData,
    SearchData,
    FooterData
  },
  data(){
    return {
      users : [
      {
        id: 1,
        name: 'Jorge',
        pass: 'selector'
      },
      {
        id:2,
        name: 'Oskar',
        pass: 'contador'
      },
      {
        id:3,
        name:'Luisa',
        pass: 'hashed'
      }
    ]}
  }
}
</script>
<style scoped>
  .home{
    display: grid;
    grid-template-rows: 7vh 81vh 12vh;
    height:100%;
  }
</style>
