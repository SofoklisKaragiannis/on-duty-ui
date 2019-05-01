<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <radial-menu
          style="margin: auto; margin-top: 0px; margin-left: 0px; background-color: white"
          :itemSize="100"
          :radius="200"
          :angle-restriction="90"
          :size="50"
          :rotate="180">
            <radial-menu-item
              v-for="(item, index) in items"
              :key="index"
              style="background-color: white"
              @click="() => handleClick(item)">
              <span>{{item}}</span>
              <!--<router-link :to="{ path: item }">{{item}}</router-link>-->
            </radial-menu-item>
    </radial-menu>
    <div style="color: rgba(0,0,0,0.6); margin-top: 32px; width: 50px;">{{ lastClicked }}</div>

    <router-view></router-view>
  </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'app',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
      return {
        items: ['specializer', 'duties', 'statistics', 'home'],
        lastClicked: 'Select'
      }
  },
  methods: {
      handleClick (item) {
        // this.lastClicked = item;
        if (item == 'specializer' || item == 'duties' || item == 'statistics') {
          this.$router.push({path: '/'+ item});
        } else {
          this.$router.push({path: '/'});
        }   
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
