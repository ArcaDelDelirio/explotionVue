<script>
export default {
  name: 'Register',
};
</script>
<template>
  <form action>
    <div class="container">
      <label>
        <b>email</b>
      </label>
      <input type="text" placeholder="Enter email" name="email" required />

      <label>
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label>
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <button type="submit">Sign Up</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
    </div>
  </form>
</template>


<style scoped>
</style>