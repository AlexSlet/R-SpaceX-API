<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'filter_tilt_shift', title: 'Latest Launch', to: '/' },
          { icon: 'flare', title: 'Next Launch', to: '/nextLaunch' },
          { icon: 'book', title: 'History', to: '/history' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'LaunchX'
      }
    }
  }
</script>
<style>
  .information{
    padding: 20px;
  }
  .links ul {
    list-style: none;
    display: flex;
  }
  ul a img{
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
  .myTitle{
    text-align: center;
    font-size: 40px;
  }
  .top{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .top img{
    width: 100px;
    height: auto;
    margin-left: 20px;
  }
  .information{
    padding: 20px;
  }
  .links ul {
    list-style: none;
    display: flex;
  }
  ul a img{
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
  .myTitle{
    text-align: center;
    font-size: 40px;
  }
  .top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .top img{
    width: 100px;
    height: auto;
    margin-left: 20px;
  }
</style>

