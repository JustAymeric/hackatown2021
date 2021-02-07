<template>
<div>
  <Bounties/>
  <bottombar/>
</div>
</template>

<script>
import Bounties from '../views/Bounties.vue'
import bottombar from "../views/bottombar.vue"
export default {
  name: "BountyCard",
  components:{
    bottombar,
    Bounties,
  }
}
</script>

<style scoped>

</style>
