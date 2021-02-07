<template>
  <div class="position">
    <v-row justify="space-around">
      <v-card  max-width="420" class="justify-center">
        <v-img
            height="400px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-app-bar
              flat
              color="rgba(0, 0, 0, 0)"
          >

            <v-toolbar-title class="title white--text pt-5 pl-5">
              Profile
            </v-toolbar-title>

            <v-spacer></v-spacer>

          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar  color="primary"
                       size="52">
              OM
            </v-avatar>
            <p class="ml-4 mt-3">
              Omar Azizi
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>


        </v-card-text>
      </v-card>
    </v-row>
    <bottombar/>
  </div>
</template>




<script>
import bottombar from "../views/bottombar.vue";
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store()
export default {
  components:{
    bottombar,


  },
  data: () => ({email:''}),
  computed: {
    emailDisplay () {
      return  this.$store.getters.userEmail;

    }
  }


}
</script>
<style>
.position{
  position:absolute;
  top:0;
}
</style>
