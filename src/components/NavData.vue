<script>
import store from "../store";

export default {
    name:'NavData',
    computed:{
        userState : () => store.state.userLogged  
    }
//TODO: userLogged variable must be an state??
}
</script>


<template>
    <header class="">
        <nav class="navbar">
            <div class="logo-container">
                <span class="logo">
                    <router-link to="/">
                        <img src="@/assets/movie.png" height="24px" width="24px" alt="logo">
                    </router-link>
                </span>
                <span>Super Movie DataBase</span>
            </div>
            <div class="login-container">
                <div class="login-state">
                    <div class="login-caps">
                        <router-link to='/login' tag="button" class="sign-button">Sign In</router-link>
                    </div>
                    <div v-if="userState" class="user-logo">
                        <i><font-awesome-icon icon="circle"/></i>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>


<style scoped>
    header{
        background-color: grey;
        padding: 10px;
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 10px;
    }
    .logo-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        padding: 0 10px 0 10px;
    }
    /* LOGIN */
    .login-container{
        display: flex;
        justify-content: space-around;
        padding: 5px;
    }
    .sign-button{
        font-weight: bold;
        background-color: lightgray;
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        padding: 5px;
    }
</style>