<template>
  <div class="login">
    <NavBar />
    <Login />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'login',
  components: {
    Login,
    NavBar,
  },
};
</script>