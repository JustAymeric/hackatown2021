<template>
  <v-content class="nav">
    <router-link to="/">
      <v-card flat color="secondary" class="rounded-0">
        <v-card-title>
          <v-img src="../assets/logo.png" height="10vh" :contain="true"></v-img>
        </v-card-title>
      </v-card>
    </router-link>
  </v-content>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
.nav {
}
</style>
