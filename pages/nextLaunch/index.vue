<template>
    <div>
        <div class="top">
            <h2 class="myTitle">Next launch</h2>
            <div id="timer" class="timer">
                <!--  Timer Component  -->
                <Timer 
                        :starttime="nextLaunch.launchDate"
                        trans='{  
                        "day":"Day",
                        "hours":"Hours",
                        "minutes":"Minuts",
                        "seconds":"Seconds",
                        "status": {
                            "expired":"Expired",
                            "running":"Running",
                            "upcoming":"Future"
                        }}'
                        ></Timer>
                <!--  End! Timer Component  -->
            </div>
        </div>
        <v-layout>
            <v-flex sm12 md8>
                <v-carousel hide-controls>
                    <v-carousel-item
                        v-for="(item,i) in images"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex sm12 md4 px-3>
                <h3 class="display-2">Description</h3>
                
                <div class="information">
                    <p>Mission name: <span>{{ nextLaunch.missionName }}</span></p>
                    <p>Rocket: <span>{{ nextLaunch.rocket }}</span></p>
                    <p>Payload: <span>{{ nextLaunch.payload }}</span></p>
                    <p>Payload mass : <span>{{ nextLaunch.payloadMass }}</span>kg</p>
                    <p>Details: {{ nextLaunch.missionDetails }}</p>
                    <v-divider dark></v-divider>
                </div>
            </v-flex>
            </v-layout>
    </div>
</template>

<script>
import axios from 'axios'
import Timer from '~/components/timer'

export default {
    components: {
        Timer
    },
    data(){
    return {
      nextLaunch: this.$store.state.nextLaunch,
      images: [
        {
          src: 'images/spaceX1.jpg'
        },
        {
          src: 'images/spaceX2.jpg'
        },
        {
          src: 'images/spaceX3.jpg'
        },
        {
          src: 'images/spaceX4.jpg'
        },
        {
          src: 'images/spaceX5.jpg'
        }
      ]
    }
    },
    fetch ({ store, params }) {
    return axios.get('https://api.spacexdata.com/v3/launches/next')
          .then(res => {
            store.commit('setNextLaunch', res.data)
          })
  }
}
</script>
<style scoped>

.timer {
  font-size: 20px;
  color: #fff;
  text-align:center;
  margin-top: 50px;
}

</style>


