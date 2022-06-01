<script>
import NavComponent from "./components/NavComp.vue";
import FooterComponent from "./components/FootComp.vue"
export default {
  name: 'app',
  components: {
    NavComponent,
    FooterComponent
  }
}
</script>

<template>
  <!-- helper css -->
  <link href="https://uploads-ssl.webflow.com/629663549bf3c6837f5775d1/css/eduardos-ghost-net.webflow.c6b725050.css" rel="stylesheet" type="text/css">

  <NavComponent></NavComponent>

  <router-view/>

  <FooterComponent></FooterComponent>

</template>

