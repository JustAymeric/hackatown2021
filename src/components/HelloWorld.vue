<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4" fill-height >
        <v-row> 
        <h1 class="display-3 font-weight-bold mb-3">
          Cities need data
        </h1>
        </v-row>
        <v-row>
        <p class="title text-center font-weight-regular">
          To draft polices
          <br>
          To solve urban issues<br>
          To optimize ressource management<br>
        </p>
        </v-row>
        <v-row>
        <h2 class="display-2 text-center mb-3">
          Better data means
        </h2>
        </v-row>
        <v-row>
        <p class="title text-center font-weight-regular px-10">
          Reducing project delays <br>
          Minimizing public expenses <br>
          Lowering carbon emissions <br>
          Improving quality of living <br>
          Building the economy of tomorrow <br>
        </p>
        </v-row>
        <v-row>
        <h3 class="display-1 mb-3">
          <span class="font-weight-bold">The solution?</span>
          Create a market for data with city bounties.
        </h3> 
        </v-row>
        <ol class="text-left">
          <li class="mb-1">
            <h4 text-left>When a city needs publicly available data, it issues a bounty for it.
            <span class="caption"> (A bounty is a reward offered as an incentive for the providing of data.)</span><br>
            <span class="subtitle-1">Example: The city of Montreal wants to know where all of its potholes are. It issues a bounty for geotagged pictures of its potholes.</span></h4>
          </li>
          <li class="mb-1">
            <h4 text-left>A citizen uses "Citybounties" to upload a geotagged picture related to an ongoing bounty.<br>
            <span class="subtitle-1">You find a pothole in your neighborhood, you take a picture of it from a safe distance and you upload it.</span></h4>
          </li>
          <li class="mb-1">
            <h4 text-left>The city verifies your bounty completion and rewards you.<br>
            <span class="subtitle-1">You find the reward on your account after a few minutes.</span></h4>
          </li>
        </ol>
        <v-row>
          <v-btn
            block
            color="primary"
            elevation="1"
          >Become a bounty hunter</v-btn>
        </v-row>
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
        <v-row><v-expansion-panels focusable>
    <v-expansion-panel>
      <v-expansion-panel-header class="text-weight-bold">Wouldn't cities lose money with these rewards?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Data analytics create massive savings for cities and utilities.<br>
        Rewards are a necessary cost for acquiring data.
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header class="text-weight-bold">Who controls the pricing on bounties?</v-expansion-panel-header>
      <v-expansion-panel-content>A city controls the pricing of its bounties. Therefore, it balances the price for acquiring data and the incentive for citizens to participate.<br>
          In such, the reward may increase or decrease over time in response to people completing bounties or not. 
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header class="text-weight-bold">How long do bounties last?</v-expansion-panel-header>
      <v-expansion-panel-content>Bounties can be ended at any time. They may also last as long as data is needed. They usually have a fixed time window.
      </v-expansion-panel-content>
      </v-expansion-panel>
  </v-expansion-panels>
        </v-row>
      </v-col>

       
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
