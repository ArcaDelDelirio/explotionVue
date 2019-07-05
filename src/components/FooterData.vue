<script>
export default {
    name:'FooterData',
    props:["users"]
}
</script>


<template>
    <footer>
        <ul>
            <li><i> <font-awesome-icon icon="server"/> </i> API State</li>
        </ul>
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
    ul{
       list-style-type: none; 
    }
</style>
