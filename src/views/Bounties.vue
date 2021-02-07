<template>
  <v-content>
    <v-list>
      <v-col
          v-for="(bounty, i) in bounties"
          :key="i"
          cols="12"
      >
        <v-card
            :color="bounty.color"
            dark
            outlined
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                  class="headline"
                  v-text="bounty.title"
              ></v-card-title>


              <v-card-subtitle v-text="bounty.category">Category:</v-card-subtitle>
              <v-card-subtitle v-text="bounty.contributers">Number of contributers:</v-card-subtitle>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12"
                           sm="6"
                           class="d-flex align center"
                    >
                      <div>
                        class="text-center"
                        v-text="bounty.status"
                      </div>
                      <v-spacer></v-spacer>
                      <div>
                        class="text-center"
                        v-text="bounty.price"
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
  data: () => ({
    bounties:[1,2,3,4,5,6,7]
  })
}
</script>

<style scoped>

</style>
