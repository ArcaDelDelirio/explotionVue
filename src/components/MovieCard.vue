<script>
export default {
  name: 'MovieCard',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card"></div>
</template>

<style scoped>
.card {
  display: flex;
}
</style>
