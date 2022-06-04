<script>
import NavComponent from "./components/NavComp.vue";
import FooterComponent from "./components/FooterComp.vue"
export default {
  name: 'app',
  components: {
    NavComponent,
    FooterComponent
  },
  data() {
    return {
      company: 'BGP Offshore',
      navigation: null,
    }
  },
  methods: {
    toggleNav(){
      if (this.$route.name === "Login" ||
       this.$route.name === "Register" ||
       this.$route.name === "Recover"){
         this.navigation = false;
         return
       }
       this.navigation = true;
    }
  },
  watch: {
    $route() {
      this.toggleNav();
    }
  }
}
</script>

<template>
  <!-- bootstrap -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <NavComponent :name="company"></NavComponent>

  <router-view/>

  <FooterComponent :name="company" v-if="navigation"></FooterComponent>

</template>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  position: relative;
  min-height: 100%;

  background: #fcfcfc;
}

/* body {
  color: #333;
  font-size: 14px;
  line-height: 20px;
  font-family: Lora, sans-serif;
} */

/* body{
    font-family: sans-serif;
} */

</style>