<script>

import DataGallery from "./DataGallery";
export default {
    name:'SearchData',
    components: {
        DataGallery
    },
    data(){
        return {
            searchUser:{}
        }
    },
    methods:{

    }
}
</script>


<template>
    <div>
        <div class="search-container">
            <form  class="search-form">
                <input  class="search-input" type="text" placeholder="ex:Title" name="search">
                <button class="search-button"><i><font-awesome-icon icon="search"/></i></button>
            </form>
        </div>
        <div id="result">
            <DataGallery  :movie="searchUser"/>
        </div>
    </div>
</template>

<style scoped>
    .search-container{
        display: flex;
        margin: 0 10% 0 10%;
    }
    .search-form{
        flex-grow: 1;
        display: flex;
    }
    .search-input{
        flex-grow: 2;
    }
    .search-button{
        flex-grow: 1;
    }
</style>
