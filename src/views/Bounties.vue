<template>
  <v-content>
    <v-list>
      <v-col
          v-for="(bounty, i) in bounties"
          :key="i"
          cols="12"
      >
        <v-card
            color="primary"
            dark
            outlined
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                  class="headline"
                  v-text=bounty.data.name
              ></v-card-title>


              <v-card-subtitle>Description: {{bounty.data.description}}</v-card-subtitle>
              <v-card-subtitle >Price: {{bounty.data.price}}</v-card-subtitle>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12"
                           sm="6"
                           class="d-flex align center"
                    >
                      <div
                          class="text-center"
                      ></div>
                      <v-spacer></v-spacer>
                      <div
                          class=""
                      >
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

            </div>


          </div>
        </v-card>
      </v-col>
    </v-list>


  </v-content>
</template>

<script>
export default {
  name: "Bounties",

  props:['bounties'],

}
</script>

<style scoped>

</style>
