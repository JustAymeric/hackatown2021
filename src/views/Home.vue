<template>
  <div class="home">
     <button @click="click">Click here to start</button>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '../router'

export default {
  name: 'Home',
  components: {},
  methods: {
    click(){
        router.push({ name: "Signin" });
    }
  }
}
</script>
<style>

</style>
