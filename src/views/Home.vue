<template>
  <v-content>
    <v-carousel>
      <v-carousel-item v-for="(color, i) in colors"
                       :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2 text-center">{{ carousel_items[i] }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-card flat class="mt-10">
      <v-card-title class="align-center justify-center">
        <div class="text-h2 text-center">Better data means</div>
      </v-card-title>
      <div class="align-center justify-center">

        <div class="text-h5 text--secondary text-center">Reducing project delays</div>
        <div class="text-h5 text--secondary text-center">Minimizing public expenses</div>
        <div class="text-h5 text--secondary text-center">Lowering carbon emissions</div>
        <div class="text-h5 text--secondary text-center">Improving quality of living</div>
        <div class="text-h5 text--secondary text-center">Building the economy of tomorrow</div>
      </div>
    </v-card>
    <v-card flat>
      <v-expansion-panels class="mt-10">

        <v-expansion-panel>
          <v-expansion-panel-header color="primary">
            <div class="text-h3 white--text text-center">The solution?</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <div class="align-center justify-center">

              <div class="mt-5 text-h3 text--secondary text-center">Create a market for data with city bounties</div>
              <v-timeline>
                <v-timeline-item>
                  <v-card>

                    <v-card-text class="primary">
                      <div class="text-h5 white--text text-center">When a city needs publicly available data, it
                        issues a bounty for it
                      </div>
                      <v-divider></v-divider>
                      <div class="text-h5 white--text text-center">A bounty is a reward offered as an incentive for
                        the providing of data
                      </div>
                    </v-card-text>
                    <v-card-text class="white">
                      <div class="text-h6 text--secondary text-center">E.g. the city of Montreal wants to know where all
                        of its potholes are. It issues a bounty for geotagged pictures of its potholes
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
                <v-timeline-item>
                  <v-card>

                    <v-card-text class="primary">
                      <div class="text-h5 white--text text-center">You use <b>Citybounties</b> to upload a
                        geotagged picture related to an ongoing bounty
                      </div>
                    </v-card-text>
                    <v-card-text class="white">
                      <div class="text-h6 text--secondary text-center">E.g. you find a pothole in your neighborhood, you
                        take a picture of it from a safe distance and you upload it
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
                <v-timeline-item>
                  <v-card>

                    <v-card-text class="primary">
                      <div class="text-h5 white--text text-center">The city verifies your bounty completion and rewards
                        you
                      </div>
                    </v-card-text>
                    <v-card-text class="white">
                      <div class="text-h6 text--secondary text-center">E.g. you find the reward on your account after a
                        few minutes
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-card class="ma-10">

      <router-link class="router" to="/signin">
        <div class="red darken-3 pa-10 text-h3 white--text rounded align-center justify-center text-center">
          Become<br>a bounty hunter
        </div>
      </router-link>
    </v-card>

    <div class="mt-10 text-h4">FAQ</div>
    <v-expansion-panel class="mt-10">
      <v-expansion-panel-header>
      </v-expansion-panel-header>
      <v-expansion-panel-content>

      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-row>
      <h4>How do rewards work then?<br></h4>
      <h5>All rewards are in the form of a city's own managed cryptocurrency.</h5>
    </v-row>
    <v-row class="text-left">
      <h4>How do rewards work then?<br></h4>
      <ul text-left class="display-6">
        <li>
          Municipal tax deductions
        </li>
        <li>
          Public transit fares
        </li>
        <li>
          Parking
        </li>
      </ul>
    </v-row>
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-weight-bold">Wouldn't cities lose money with these rewards?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Data analytics create massive savings for cities and utilities.<br>
          Rewards are a necessary cost for acquiring data.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-weight-bold">Who controls the pricing on bounties?
        </v-expansion-panel-header>
        <v-expansion-panel-content>A city controls the pricing of its bounties. Therefore, it balances the
          price for acquiring data and the incentive for citizens to participate.<br>
          In such, the reward may increase or decrease over time in response to people completing bounties or
          not.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-weight-bold">How long do bounties last?
        </v-expansion-panel-header>
        <v-expansion-panel-content>Bounties can be ended at any time. They may also last as long as data is
          needed. They usually have a fixed time window.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <router-link class="router" to="/about">
      <v-card>
        <v-tabs grow centered>
          <v-tab>About</v-tab>
        </v-tabs>
      </v-card>
    </router-link>
  </v-content>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    colors: [
      "primary",
      "red",
      "cyan",
      "pink"
    ],
    carousel_items: [
      "Cities need data",
      "to draft policies",
      "to solve urban issues",
      "to optimize ressource management"
    ]
  })
}
</script>
<style>
.router {
  text-decoration: none
}

.parallax {
  position: absolute;
}
</style>
