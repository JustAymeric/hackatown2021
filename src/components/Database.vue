<template>
<div>
   <p :key=index v-for="(i,index) in cities">{{i}}</p>

      <p :key=index1 v-for="(it,index1) in citizens">{{it}}</p>


      <h1>{{this.citizens[0].data.email}}</h1>

    <router-view/>
</div>
</template>

<script>
import {dataBase} from './Firebase.js';
export default {

  components: {
    
    
  }, 
    async created() {

       const data = await dataBase.collection('Cities').get();
       data.forEach((doc)=> {this.cities.push({id:doc.id, data:doc.data()});});

        const dataCitizen = await dataBase.collection('Citizens').get();
       dataCitizen.forEach((doc)=> {this.citizens.push({id:doc.id, data:doc.data()});});
},

  data: () => ({       
    cities:[],
    citizens:[]

  }),
};
</script>

<style>

</style>
