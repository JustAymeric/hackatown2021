<template>
  <div>
    <Bounties :bounties=cities />
    <bottombar/>
  </div>
</template>

<script>
import Bounties from '../views/Bounties.vue'
import bottombar from "../views/bottombar.vue"
import {dataBase} from '../Firebase'
export default {
  name: "BountyCard",


  components:{
    bottombar,
    Bounties,
  },
  async created() {
    const data = await dataBase.collection('Cities').doc('rP6a1fetpWLcdXROQN1U').collection('Bounties').get();
    data.forEach((doc)=> {this.cities.push({id:doc.id, data:doc.data()});});

    const dataCitizen = await dataBase.collection('Citizens').get();
    dataCitizen.forEach((doc)=> {this.citizens.push({id:doc.id, data:doc.data()});});
  },
  data: () => ({
    cities:[],
    citizens:[]
  }),

}


</script>

<style scoped>

</style>
