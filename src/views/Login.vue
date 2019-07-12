<template>
  <div class="about">
    <NavData />
    <input-data />
  </div>
</template>
<script>
// @ is an alias to /src
import NavData from '@/components/NavData.vue'
import InputData from "../components/inputData";

export default {
  name: 'about',
  components: {
    InputData,
    NavData,
  }
}
</script>