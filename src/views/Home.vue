<template>
  <div class="home">
    <navData />
    <searchData />
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
