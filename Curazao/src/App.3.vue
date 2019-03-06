<template>
  <div id="app">
    <h1 class="ui center aligned header">Staff Directory</h1>
    <StaffDirectory developer="jlVALENCIAPLAZA 4">
      <li>Buy some milk</li>
      <li>Feed the cats</li>
      <li>Have some pie</li>
    </StaffDirectory>
  </div>
</template>

<script>
    import "semantic-ui-css/semantic.css";
    import StaffDirectory from "./components/StaffDirectory.vue";
    export default {
        name: "app",
        components: {
            StaffDirectory
        }
    };
</script>