<template>
    <nav>
        <img src="@/assets/movie.png" height="24px" width="24px" alt="logo">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link>
    </nav>
</template>

<script>
export default {
    name:'NavData'
}
</script>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        background-color: grey;
        margin:0;
        padding:1%;
    }
    nav a{
        align-self: center;
    }
    nav img{
        align-self: center;
    }
</style>