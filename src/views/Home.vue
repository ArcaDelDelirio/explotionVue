<template>
  <div class="home">
    <searchData />
    <FooterData />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterData from '@/components/FooterData.vue'
import SearchData from '@/components/SearchData.vue'

export default {
  name: 'home',
  components: {
    SearchData,
    FooterData
  }
}
</script>
