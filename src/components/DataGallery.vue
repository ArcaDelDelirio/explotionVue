<script>

export default {
    name:'DataGallery',
    props: {
        movie: {
            required: true,
            default: () => ({})
        }
    },
    mounted(){
        this.getAllMovies();
    },
    methods:{
        getAllMovies(){
            console.log('Mounted');
            return fetch('https://api-explotion.herokuapp.com/movies/get-movies')
                    .then(res => res.json())
                    .then(response => this.movie = response)
                    .catch(error => this.movie = error)
        }
    },
    computed:{
        getProperty(){
            return this.map(el => el.title)
        }
    }
}
</script>


<template>
    <div>
        {{movie.getProperty}}
    </div>
</template>

<style scoped>

</style>