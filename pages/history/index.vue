<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <h1>History</h1>
                <button class="reverseBtn" @click="this.reversArr">
                    <span v-if="reverse"><i class="material-icons">expand_less</i></span>
                    <span v-else><i class="material-icons">expand_more</i></span>
                </button>
                <ul class="historyList">
                    <li v-for="(item,i) in launches" :key="i" class="historyItem">
                        <h3 class="historyTitle">{{ item.title }}</h3>
                        <p class="historyDescription">{{ item.details }}</p>
                        <div class="historyFooter">
                            <div class="soc">
                                <a v-if="item.links.reddit" :href="item.links.reddit"><img src="~/static/reddit.svg" alt="reddit"></a>
                                <a :href="item.links.wikipedia"><img src="~/static/wikipedia-logotype-of-earth-puzzle.svg" alt="wiki"></a>
                            </div>
                            <div class="date">
                                <span>{{ item.event_date_utc | changeDate}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
        reverse: false
    }
  },
  filters: {
    changeDate: function (value){
        let reg = /-/gi;
        return value.substring(0,10).replace(reg,'.',); 
    }
  },
  asyncData ({ params }) {
    return axios.get('https://api.spacexdata.com/v3/history')
          .then(res => {
            return {
              launches: [
                  ...res.data
              ]
            }
          })
  },
  methods: {
    reversArr(){
        this.launches.reverse();
        this.reverse = !this.reverse;
    }
  }
}
</script>

<style scoped>

    h1{
        text-align: center;
    }
    .historyList{
        padding: 0;
        list-style: none;
    }
    .historyItem{
        background-color: #212121;
        padding: 15px;
        margin: 15px 0;
        border-radius: 3px;
    }
    .historyItem h3{
        margin-bottom: 20px;
    }
    .historyTitle{
        text-align: center;
        font-size: 22px;
    }
    .historyFooter{
        display: flex;
        justify-content: space-between;
    }
    .soc a img{
        width: 25px;
        height: auto;
        margin: 0 10px;
    }
    .reverseBtn{
        padding: 0 10px;
        font-size: 24px;
        border-radius: 3px;
        background-color: #212121;
        outline: none;
        transition: 0.3s all;
    }
    .material-icons{
        line-height: 1.5;
    }

</style>

