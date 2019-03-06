<template>
  <div id="app">
    <h1 class="ui center aligned header">It's only About Us</h1>
    <h4>Developed by {{ developerName }}</h4>
  </div>
</template>

<script>
// opcion 2
//import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "About",
  // opcion 1
  /*
  computed: {
    developerName() {
      return this.$store.state.developerName;
    }
  },
  */
  // opcion 2
  /*
  computed: mapState({
    // arrow functions can make the code very succinct!
    developerName1: state => state.developerName + '!',

    // passing the string value 'count' is same as `state => state.count`
    developerName2: "developerName",

    // to access local state with `this`, a normal function must be used
    countPlusLocalState(state) {
      return state.count + this.localCount;
    }
  })
  */
  // opcion 3
  computed: {
    ...mapGetters(["cartItemCount", "developerName"])
  }
};
</script>