<script>
// @ is an alias to /src
import FooterData from '@/components/FooterData.vue'
import SearchData from '@/components/SearchData.vue'
import NavData from '@/components/NavData.vue'
import DataGallery from '@/components/DataGallery.vue'

export default {
  name: 'home',
  components: {
    NavData,
    SearchData,
    DataGallery,
    FooterData
  },
  data() {
    return {
      movie : { title: ''}
    }
  }
}
</script>


<template>
  <div class="home">
    <NavData />
    <SearchData />
    <DataGallery :movie="movie" />
    <FooterData />
  </div>
</template>

<style scoped>
  .home{
    display: grid;
    grid-template-rows: 7vh 81vh 12vh;
    height:100%;
  }
</style>