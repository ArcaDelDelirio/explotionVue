<template>
  <div class="about">
    <NavData />
    <h1>This is the Login page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import NavData from '@/components/NavData.vue'

export default {
  name: 'about',
  components: {
    NavData,
  }
}
</script>