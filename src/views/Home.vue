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
  data() {
    return {
      movie : {
        SearchData
      }
    }
  }
}
</script>


<template>
  <div class="home">
    <NavData />
    <SearchData />
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