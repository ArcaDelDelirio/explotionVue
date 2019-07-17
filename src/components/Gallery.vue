<script>
import { returnStatement } from '@babel/types';
export default {
    name:'Gallery',
    data(){
        return {
            movies: []
        }
    },
    props: {     
        searchQuery:{
            type: String,
            required: false,
        },
    },
    mounted(){
        this.getAllMovies();
    },
    methods:{
        getAllMovies(){
            return fetch('https://api-explotion.herokuapp.com/movies/get-movies')
                    .then(res => res.json())
                    .then(response => this.setProperty(response))
                    .catch(error => this.setProperty(error))
        },
        getProperty: function(){
            return this.map(el => el.title)
        },
        setProperty: function(property){
            this.movies = property;
        }
    },
    computed:{
        getSearchQuery(){
            return this.searchQuery;
        }
    }
}
</script>


<template>
    <div>
        {{searchQuery}}
        {{movies}}
    </div>
</template>

<style scoped>

</style>