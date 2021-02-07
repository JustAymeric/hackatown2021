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
        <span>My bounties</span>

        <v-icon>mdi-sack</v-icon>
      </v-btn>

      <v-btn x-large>
        <span>Camera</span>

        <v-icon>mdi-camera</v-icon>
      </v-btn>

      <v-btn x-large>
        <span>Profile</span>

        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>