<script>
export default {
    name:'NavData'
}
</script>


<template>
    <nav>
        <ul class="container">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to='/login'>Login</router-link>
            <router-link to='/register'>Register</router-link>
            <img src="@/assets/movie.png" height="24px" width="24px" alt="logo">
        </ul>
    </nav>
</template>


<style scoped>
    .container{
        display: flex;
        justify-content: space-between;
        background-color: grey;
        margin:0;
        padding:1%;
    }
    .container a{
        align-self: center;
    }
    .container img{
        align-self: center;
    }
</style>