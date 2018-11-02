<template>
  <div>
    <div class="top">
      <h2 class="myTitle">Latest launch</h2>
      <img :src="lastLaunch.missionImage" alt="Logo">
    </div>
    <v-layout>
      <v-flex sm12 md8>
        <v-carousel hide-controls>
          <v-carousel-item
            v-for="(item,i) in lastLaunch.missionImages"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex sm12 md4 px-3>
          <h3 class="display-2">Description</h3>
          
          <div class="information">
            <p>Mission name: <span>{{ lastLaunch.missionName }}</span></p>
            <p>Rocket: <span>{{ lastLaunch.rocket }}</span></p>
            <p>Payload: <span>{{ lastLaunch.payload }}</span></p>
            <p>Payload mass : <span>{{ lastLaunch.payloadMass }}</span>kg</p>
            <p>Details: {{ lastLaunch.missionDetails }}</p>
            <v-divider dark></v-divider>
          </div>
          <div class="links">
            <ul>
              <li>
                <a target="blank" :href="lastLaunch.links.reddit"><img src="~/static/reddit.svg" alt="reddit"></a>
              </li>
              <li>
                <a target="blank" :href="lastLaunch.links.youtube"><img src="~/static/youtube.svg" alt="youtube"></a>
              </li>
              <li>
                <a target="blank" :href="lastLaunch.links.wiki"><img src="~/static/wikipedia-logotype-of-earth-puzzle.svg" alt="wikipedia"></a>
              </li>
            </ul>
          </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <div id="disqus_thread"></div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    script: [
      { src: '/disqus.js', type: 'text/javascript', body: true }
    ]
  },
  data(){
    return {
      lastLaunch: this.$store.state.lastLaunch
    }
  },
  fetch ({ store, params }) {
    return axios.get('https://api.spacexdata.com/v3/launches/latest')
          .then(res => {
            store.commit('setLastLaunch', res.data)
          })
  }
}
</script>
<style>
  
</style>
