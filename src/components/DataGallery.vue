<script>

export default {
    name:'DataGallery',
    props: {
        movie: {
            required: true,
            default: () => ({})
        }
    }
}
</script>


<template>
    <div v-if="movie.hasOwnProperty('0')">
        {{movie}}
    </div>
</template>

<style scoped>

</style>