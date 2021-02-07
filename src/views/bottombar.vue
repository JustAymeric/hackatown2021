<template>
    <div>
         <v-bottom-navigation
        class=' mx-auto'
        color="teal"
        grow
        height="50"
        fixed
        block
        max-width="700"
    >
      <v-btn x-large>
     <router-link class="router" to="/bounties">
        <v-icon>mdi-sack</v-icon>
    </router-link>
      </v-btn>

      <v-btn x-large> 
        <v-icon @click="click">mdi-camera</v-icon>
      </v-btn>


      <v-btn x-large>
          
    <router-link class="router" to="/profile">
        <v-icon>mdi-account</v-icon>
    </router-link>
      </v-btn>
    </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    methods:{
      click(){
        return `<input type="file" accept="image/*" capture="camera">`;
      }
    }
}
</script>
<style>

</style>