<template>
  <div class="container">
    <div>Este es el menú:
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "semantic-ui-css/semantic.css";
export default {
  name: "App"
};
</script>

<style>
body {
  padding: 2em;;
}
</style>