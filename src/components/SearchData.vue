<script>

export default {
    name:'SearchData',
    
}
</script>


<template>
    <div>
        <h1>Super Movie DataBase</h1>
        <div class="search-container">
            <form class="search-form" action="">
                <input class="search-input" type="text" placeholder="ex:Title" name="search">
                <button class="search-button" type="submit"><i><font-awesome-icon icon="search"/></i></button>
            </form>
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
