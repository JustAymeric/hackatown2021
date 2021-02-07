<template>
    <div>
         <v-bottom-navigation
        :value="value"
        color="teal"
        grow
        height="40"
        max-width="500"
        fixed
    >
      <v-btn>
        <span>My bounties</span>

        <v-icon>mdi-sack</v-icon>
      </v-btn>

      <v-btn>
        <span>Camera</span>

        <v-icon>mdi-camera</v-icon>
      </v-btn>

      <v-btn>
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