<template>
<v-app>
    <welcome-page/>
    <router-view/>
</v-app>
</template>

<script>
import WelcomePage from './WelcomePage.vue';

export default {
  name: 'App',

  components: {
    WelcomePage

  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
