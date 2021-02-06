<template>
<v-app>
    <welcome-page/>
   <DataBase/>

    <router-view/>
</v-app>
</template>

<script>
import WelcomePage from './WelcomePage.vue';
export default {
  name: 'App',

  components: {
    WelcomePage,
    DataBase
    
    
  }, 
  
};
</script>

<style>

</style>
