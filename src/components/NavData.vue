<script>
export default {
    name:'NavData'
}
</script>


<template>
    <nav>
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link>
        <router-link to='/login'>Login</router-link>
        <router-link to='/register'>Register</router-link>
        <img src="@/assets/movie.png" height="24px" width="24px" alt="logo">
    </nav>
</template>


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