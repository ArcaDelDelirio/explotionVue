<script>
import store from '../store'
export default {
    name:'Footer',
    props:["users"],
    computed:{
        apiStatus: () => store.state.apiState,
        responseTime: () => store.state.responseTime
    }
}
</script>


<template>
    <footer>
        <div class="flag-api">
            <div :class="{active:apiStatus}" class="status">
                <i><font-awesome-icon icon="circle"/></i>
            </div>
            {{responseTime}}ms
            <i> <font-awesome-icon icon="server"/> API State </i>
        </div>
        <div v-bind:key="user.id" v-for="user in users">
            <i v-if="user.id == 1">User: {{user.name}}</i> 
        </div>
    </footer>
</template>


<style scoped>
    footer{
        display: flex;
        bottom: 0;
    }
    .status{
        color:red;
    }
    .active{
        color:green;
    }
    .flag-api{
        display: flex;
    }
    ul{
       list-style-type: none; 
    }
</style>
