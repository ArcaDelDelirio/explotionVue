<script>
export default {
    name:'Gallery',
    data(){
        return {
            movies: []
        }
    },
    props: {
        
        searchQuery: '',
    },
    mounted(){
        this.getAllMovies();
    },
    methods:{
        getAllMovies(){
            console.log('Mounted');
            return fetch('https://api-explotion.herokuapp.com/movies/get-movies')
                    .then(res => res.json())
                    .then(response => setProperty(response))
                    .catch(error => setProperty(error))
        }
    },
    computed:{
        getProperty(){
            return this.map(el => el.title)
        },
        setProperty(property){
            this.movies.map(el => property)
        }
    }
}
</script>


<template>
    <div>
        {{movies}}
    </div>
</template>

<style scoped>

</style>