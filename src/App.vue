<template>
  <!-- <v-app>
    <Navbar></Navbar>
    <router-view/>
  </v-app> -->
  <BountyCard/>
</template>

<script>
//import Navbar from "@/components/Navbar";
import BountyCard from "@/components/BountyCard.vue";
export default {
  name: 'App',

  components: {
   // Navbar,
   BountyCard,

  },
};
</script>

<style>

</style>
