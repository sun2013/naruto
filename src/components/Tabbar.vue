<template>
  <mt-tabbar>
    <mt-tab-item id="直播">
      <img slot="icon" src="assets/logo.png">
      <router-link :to="'Live'"><img slot="icon" src="assets/logo.png">直播</router-link>
    </mt-tab-item>
    <mt-tab-item id="推荐">
      <img slot="icon" src="assets/logo.png">
      <router-link :to="'Recommend'"><img slot="icon" src="assets/logo.png">推荐</router-link>
    </mt-tab-item>
    <mt-tab-item id="追番">
      <img slot="icon" src="assets/logo.png">
      <router-link :to="'Drama'"><img slot="icon" src="assets/logo.png">追番</router-link>
    </mt-tab-item>
    <mt-tab-item id="分区">
      <img slot="icon" src="assets/logo.png">
      <router-link :to="'Part'"><img slot="icon" src="assets/logo.png">分区</router-link>
    </mt-tab-item>
    <mt-tab-item id="动态">
      <img slot="icon" src="assets/logo.png">
      <router-link :to="'Event'"><img slot="icon" src="assets/logo.png">动态</router-link>
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" src="assets/logo.png">
      <router-link :to="'Find'"><img slot="icon" src="assets/logo.png">发现</router-link>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
